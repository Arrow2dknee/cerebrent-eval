import { IsNotEmpty, IsString, MinLength, MaxLength, IsNumber } from 'class-validator';

export class EnquiryFormDto {
  @MaxLength(20)
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
  @IsNotEmpty()
  readonly phoneNumber: number;

  @MaxLength(250)
  @MinLength(10)
  @IsString()
  @IsNotEmpty()
  readonly message: string;
}
