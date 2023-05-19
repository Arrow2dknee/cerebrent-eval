import { Injectable } from '@nestjs/common';
import { EnquiryFormDto } from './dto';

@Injectable()
export class EnquiryService {
  constructor() {}

  saveEnquiryForm(dto: EnquiryFormDto) {
    return {
      name: dto.name,
      phone: dto.phoneNumber,
      message: dto.message,
    }
  }
}
