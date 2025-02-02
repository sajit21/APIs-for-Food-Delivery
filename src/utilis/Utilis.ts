


export class Utilis{
  public verified_OTPDate= 5 * 60 * 1000
    static GenerateOTp(digit:number=6){
        const digits='0123456789'
        let OTP='';
        for(let i=0;i<digit;i++)
        {
        OTP+=Math.floor(Math.random() * 10)
        }
        return parseInt(OTP)
    }
}