import { Controller, Post, Body } from '@nestjs/common';

import { EnquiryService } from './enquiry.service';
import { EnquiryFormDto } from './dto';

@Controller('enquiry')
export class EnquiryController {
  constructor(
    private readonly enquiryService: EnquiryService,
  ) {}

  @Post()
  createEnquiry(@Body() dto: EnquiryFormDto) {
    const data = this.enquiryService.saveEnquiryForm(dto);

    return {
      message: 'Thank you for submitting our enquiry form',
      data,
    }
  }
}
