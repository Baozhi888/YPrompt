import asyncio
import aiohttp
import json
import time
import ssl
from datetime import datetime
from typing import List, Dict, Any

async def fetch_data(session: aiohttp.ClientSession, url: str) -> Dict[str, Any]:
    """异步获取API数据"""
    try:
        async with session.get(url) as response:
            data = await response.json()
            # 添加时间戳字段
            data['timestamp'] = datetime.now().isoformat()
            return data
    except Exception as e:
        return {
            'error': str(e),
            'timestamp': datetime.now().isoformat()
        }

async def fetch_multiple(url: str, count: int = 10, concurrency: int = 2) -> List[Dict[str, Any]]:
    """并发获取多个请求结果"""
    semaphore = asyncio.Semaphore(concurrency)
    
    async def fetch_with_semaphore(session: aiohttp.ClientSession) -> Dict[str, Any]:
        async with semaphore:
            return await fetch_data(session, url)
    
    # 禁用SSL验证
    ssl_context = ssl.create_default_context()
    ssl_context.check_hostname = False
    ssl_context.verify_mode = ssl.CERT_NONE
    
    connector = aiohttp.TCPConnector(ssl=ssl_context)
    async with aiohttp.ClientSession(connector=connector) as session:
        tasks = [fetch_with_semaphore(session) for _ in range(count)]
        results = await asyncio.gather(*tasks)
        return results

def get_current_file_info(base_filename: str = 'res') -> tuple[str, int]:
    """获取当前文件名和记录数"""
    import os
    
    file_num = 1
    while True:
        if file_num == 1:
            filename = f"{base_filename}.txt"
        else:
            filename = f"{base_filename}{file_num}.txt"
        
        if not os.path.exists(filename):
            return filename, 0
        
        # 计算文件中的行数
        with open(filename, 'r', encoding='utf-8') as f:
            line_count = sum(1 for _ in f)
        
        if line_count < 100:
            return filename, line_count
        
        file_num += 1

def save_results(results: List[Dict[str, Any]], base_filename: str = 'res') -> str:
    """保存结果到文件，超过100条自动创建新文件"""
    current_file, current_count = get_current_file_info(base_filename)
    
    results_to_save = []
    remaining_space = 100 - current_count
    
    if remaining_space > 0:
        # 当前文件还有空间
        results_to_save = results[:remaining_space]
        with open(current_file, 'a', encoding='utf-8') as f:
            for result in results_to_save:
                f.write(json.dumps(result, ensure_ascii=False) + '\n')
    
    # 如果还有剩余结果，写入新文件
    remaining_results = results[len(results_to_save):]
    if remaining_results:
        # 获取下一个文件名
        next_file, _ = get_current_file_info(base_filename)
        with open(next_file, 'a', encoding='utf-8') as f:
            for result in remaining_results:
                f.write(json.dumps(result, ensure_ascii=False) + '\n')
        return next_file
    
    return current_file

async def main():
    url = "https://cursorfreeapi.96ai.top/api/generate?location=US"
    count = 10
    concurrency = 2
    
    batch_num = 1
    
    while True:
        try:
            print(f"第 {batch_num} 批请求开始，发起 {count} 次请求，并发数: {concurrency}")
            
            start_time = time.time()
            results = await fetch_multiple(url, count, concurrency)
            end_time = time.time()
            
            saved_file = save_results(results)
            
            success_count = len([r for r in results if 'error' not in r])
            print(f"第 {batch_num} 批完成！耗时: {end_time - start_time:.2f}秒，成功: {success_count}/{count}，保存到: {saved_file}")
            
            batch_num += 1
            
            # 短暂休息，避免过于频繁请求
            await asyncio.sleep(1)
            
        except KeyboardInterrupt:
            print("\n程序被用户中断")
            break
        except Exception as e:
            print(f"批次 {batch_num} 出现错误: {e}")
            await asyncio.sleep(5)

if __name__ == "__main__":
    asyncio.run(main())