

export class DataPresentationService {

  /**
   * Present a date for experience in a human-readable format.
   * 
   * @param dateString 
   * @returns 
   */
  public static presentDate(dateString:string|undefined|null): string {
    if (dateString === null || dateString === undefined) {
      return 'Present'
    }
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

}