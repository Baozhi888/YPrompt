import { StreamFilter } from '../streaming/StreamFilter'

/**
 * AI响应内容清理器
 * 负责清理AI响应中的特殊标签和评估内容
 */
export class ResponseCleaner {
  /**
   * 清理AI响应中的评估标签和其他特殊内容
   * @param response AI响应文本
   * @returns 清理后的文本
   */
  static cleanResponse(response: string): string {
    try {
      // 移除完整的评估标签及其内容
      let cleaned = response.replace(/<ASSESSMENT>[\s\S]*?<\/ASSESSMENT>/gi, '').trim()
      
      // 处理流式过程中不完整的评估标签
      // 如果发现开始标签但没有结束标签，截断到开始标签之前
      const assessmentStart = cleaned.indexOf('<ASSESSMENT>')
      if (assessmentStart !== -1) {
        cleaned = cleaned.substring(0, assessmentStart).trim()
      }
      
      // 处理其他可能的不完整标签模式
      const patterns = [
        /<ASSE[^>]*$/i,     // 不完整的开始标签
        /<\/ASSE[^>]*$/i,   // 不完整的结束标签
        /\n\n<ASSE/i,       // 换行后的开始标签
        /CONTEXT:/i,        // 评估内容的关键词
        /TASK:/i,
        /FORMAT:/i,
        /QUALITY:/i,
        /TURN_COUNT:/i,
        /DECISION:/i,
        /CONFIDENCE:/i
      ]
      
      for (const pattern of patterns) {
        const match = cleaned.search(pattern)
        if (match !== -1) {
          cleaned = cleaned.substring(0, match).trim()
          break
        }
      }
      
      return cleaned
    } catch (error) {
      return response // 清理失败时返回原内容
    }
  }

  /**
   * 清理完整文本中的<think></think>标签内容（用于最终结果处理）
   * 使用 StreamFilter.removeThinkTags 进行think标签移除
   * @param text 需要清理的文本
   * @returns 清理后的文本
   */
  static cleanThinkTags(text: string): string {
    if (!text) return text
    return StreamFilter.removeThinkTags(text)
  }
}
