export class Utils {
  public millisToDateInput(millis: string): string {
    return new Date(Number(millis)).toISOString().substr(0, 10);
  }
}
