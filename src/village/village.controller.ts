import { 
  Controller, 
  Post, 
  Body, 
  Get, 
  Param, 
  Query,
  Patch,
  Delete,
  HttpStatus,
  HttpCode 
} from '@nestjs/common';
import { 
  ApiTags, 
  ApiOperation, 
  ApiResponse, 
  ApiParam,
  ApiBody,
  ApiQuery 
} from '@nestjs/swagger';
import { VillageService } from './village.service';
import { CreateVillageDto, GetVillagesQueryDto, VillageResponseDto, UpdateVillageDto, DeleteVillageResponseDto } from './dto/village.dto';
import { Village } from '../schema/village/village.schema';

@ApiTags('Villages')
@Controller('villages')
export class VillageController {
  constructor(private readonly villageService: VillageService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ 
    summary: 'Create a new village',
    description: 'Creates a new village with the provided information'
  })
  @ApiBody({ 
    type: CreateVillageDto,
    description: 'Village data to create'
  })
  @ApiResponse({ 
    status: 201, 
    description: 'Village successfully created',
    type: VillageResponseDto
  })
  @ApiResponse({ 
    status: 409, 
    description: 'Village with this name already exists'
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Invalid input data'
  })
  async createVillage(@Body() createVillageDto: CreateVillageDto): Promise<Village> {
    return await this.villageService.createVillage(createVillageDto);
  }

  @Get()
  @ApiOperation({ 
    summary: 'Get villages with optional filters',
    description: 'Retrieves villages from the database with optional filtering by status and search by name'
  })
  @ApiQuery({ 
    name: 'status', 
    required: false, 
    enum: ['active', 'inactive'],
    description: 'Filter villages by status'
  })
  @ApiQuery({ 
    name: 'search', 
    required: false, 
    type: String,
    description: 'Search villages by name (case-insensitive partial match)'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'List of villages matching the criteria',
    type: [VillageResponseDto]
  })
  async getAllVillages(@Query() queryDto: GetVillagesQueryDto): Promise<Village[]> {
    return await this.villageService.findAll(queryDto);
  }

  @Get(':id')
  @ApiOperation({ 
    summary: 'Get village by ID',
    description: 'Retrieves a specific village by its ID'
  })
  @ApiParam({ 
    name: 'id', 
    description: 'Village ID',
    type: String
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Village found',
    type: VillageResponseDto
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Village not found'
  })
  async getVillageById(@Param('id') id: string): Promise<Village | null> {
    return await this.villageService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ 
    summary: 'Update village by ID',
    description: 'Updates a specific village with the provided information'
  })
  @ApiParam({ 
    name: 'id', 
    description: 'Village ID',
    type: String
  })
  @ApiBody({ 
    type: UpdateVillageDto,
    description: 'Village data to update (only provided fields will be updated)'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Village successfully updated',
    type: VillageResponseDto
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Village not found'
  })
  @ApiResponse({ 
    status: 409, 
    description: 'Village with this name already exists'
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Invalid input data'
  })
  async updateVillage(
    @Param('id') id: string, 
    @Body() updateVillageDto: UpdateVillageDto
  ): Promise<Village> {
    return await this.villageService.updateVillage(id, updateVillageDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Delete village by ID',
    description: 'Deletes a specific village by its ID'
  })
  @ApiParam({ 
    name: 'id', 
    description: 'Village ID',
    type: String
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Village successfully deleted',
    type: DeleteVillageResponseDto
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Village not found'
  })
  async deleteVillage(@Param('id') id: string): Promise<DeleteVillageResponseDto> {
    return await this.villageService.deleteVillage(id);
  }
}
