import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';

@Controller('pictures')
export class PicturesController {
  constructor(private readonly picturesService: PicturesService) {}

  @Post()
  create(@Body() createPictureDto: CreatePictureDto) {
    return this.picturesService.create(createPictureDto);
  }

  @Get()
  findSome(@Param('params') params: string) {
   return this.picturesService.findSome();
   console.log(params)
   console.log("jaja")
  return 
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const pictures = this.picturesService.findOne(id);
    
    return pictures;
    
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePictureDto: UpdatePictureDto) {
    return this.picturesService.update(+id, updatePictureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.picturesService.remove(+id);
  }
}
