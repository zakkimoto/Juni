import { Injectable } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';

import axios from 'axios'


const https = require('https');

const APIKEY = 'AIzaSyDMXcIDABhgvhpqC0zPaRXxFmqgZomyD4g'

@Injectable()
export class PicturesService {
 
  create(createPictureDto: CreatePictureDto) {
    return 'This action adds a new picture';
  }

  findSome() {
    return `This action returns all pictures`;
  }

  async findOne(id: string) {
    console.log(APIKEY);
    console.log(id);
    console.log("data fyrir neðan")
    const picData = await axios.get('https://content.googleapis.com/customsearch/v1?cx=001361074102112665899%3Ap7mybnrloug&q=' + id + '&searchType=image&key=' + APIKEY)
    console.log(picData);
    console.log("data fyrir ofan")
    const retData = picData.data
    
    
    return retData
 
    
  }

  update(id: number, updatePictureDto: UpdatePictureDto) {
    return `This action updates a #${id} picture`;
  }

  remove(id: number) {
    return `This action removes a #${id} picture`;
  }
}
