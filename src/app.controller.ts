import { ChatService } from '@app/chat/chat.service';
import { AddUserDTO, UserChatDTO, AllChatQueryDTO, ChatHistoryQueryDTO, CreateChatDTO, PaginationDTO, UserStatusDTO, FavouriteChatDTO, MessageHistoryQueryDTO, AddUserToChatDTO, UserProfileDTO, UpdateChatDTO, GetAllUsersDTO } from '@app/chat/dto/chat.dto';
import { BadRequestException, Body, Controller, Get, Param, Post, Query, UnauthorizedException, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { User } from './decorators/user.decorator';

@Controller()
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class AppController {
  constructor(
    private chatService: ChatService,
  ) { }

  @Get()
  getHello(): string {
    return "hello";
  }

  @Post('/create')
  create(@Body() createChatDTO: CreateChatDTO, @User() user) {
    if (createChatDTO.ownerUserId != user.id) {
      throw new UnauthorizedException("not allowed");
    }
    return this.chatService.create(createChatDTO);
  }

  @Post('/addUserToChat')
  addUserToChat(@Body() addUserToChatDTO: AddUserToChatDTO, @User() user) {
    if (addUserToChatDTO.moderatorId != user.id) {
      throw new UnauthorizedException("not allowed");
    }
    return this.chatService.addUserToChat(addUserToChatDTO);
  }

  @Post('/removeUserFromChat')
  removeUserFromChat(@Body() addUserToChatDTO: AddUserToChatDTO, @User() user) {
    if (addUserToChatDTO.moderatorId != user.id) {
      throw new UnauthorizedException("not allowed");
    }
    return this.chatService.removeUserFromChat(addUserToChatDTO);
  }


  @Post('/leaveChat')
  leaveChat(@Body() userChatDTO: UserChatDTO, @User() user) {
    if (userChatDTO.userId != user.id) {
      throw new UnauthorizedException("not allowed");
    }
    return this.chatService.leaveChat(userChatDTO);
  }

  @Post('/makeModerator')
  makeModerator(@Body() addUserToChatDTO: AddUserToChatDTO, @User() user) {
    console.log(addUserToChatDTO, user.id)
    if (addUserToChatDTO.moderatorId != user.id) {
      throw new UnauthorizedException("not allowed");
    }
    return this.chatService.makeModerator(addUserToChatDTO);
  }

  @Post('/updateUserStatus')
  updateUserStatus(@Body() userStatusDTO: UserStatusDTO, @User() user) {
    if (userStatusDTO.userId != user.id) {
      throw new UnauthorizedException("not allowed");
    }
    return this.chatService.updateUserStatus(userStatusDTO);
  }

  @Post('/addUser')
  addUser(@Body() addUserDTO: AddUserDTO, @User() user) {
    return this.chatService.addUser(addUserDTO);
  }

  @Post('/markChatFavourtie')
  markChatFavourtie(@Body() favouriteChatDTO: FavouriteChatDTO, @User() user) {
    if (favouriteChatDTO.userId != user.id) {
      throw new UnauthorizedException("not allowed");
    }
    return this.chatService.markChatFavourtie(favouriteChatDTO);
  }

  @Get('/getAllUsers')
  getAllUsers(@Query() getAllUsersDTO: GetAllUsersDTO, @User() user) {
    return this.chatService.getAllUsers(getAllUsersDTO, user?.id);
  }


  @Get('/getAllChats')
  getAllChats(@Query() allChatQueryDTO: AllChatQueryDTO, @User() user) {
    if (allChatQueryDTO.userId != user.id) {
      throw new UnauthorizedException("not allowed");
    }
    return this.chatService.getAllChats(allChatQueryDTO);
  }

  @Get('/getChatMessages')
  getChatMessages(@Query() chatHistoryQueryDTO: ChatHistoryQueryDTO, @User() user) {
    if (chatHistoryQueryDTO.userId != user.id) {
      throw new UnauthorizedException("not allowed");
    }
    return this.chatService.getChatMessages(chatHistoryQueryDTO);
  }

  @Get('/getReadMessages')
  getReadMessages(@Query() messageHistoryQueryDTO: MessageHistoryQueryDTO, @User() user) {
    if (messageHistoryQueryDTO.userId != user.id) {
      throw new UnauthorizedException("not allowed");
    }
    return this.chatService.getReadMessages(messageHistoryQueryDTO);
  }

  @Get('/getUserProfile')
  getUserProfile(@User() user) {
    return this.chatService.getUserProfile(user.id);
  }

  @Post('/updateUserProfile')
  updateUserProfile(@Body() userProfileDTO: UserProfileDTO, @User() user) {
    return this.chatService.updateUserProfile(user.id, userProfileDTO);
  }

  @Post('/updateChat')
  updateChat(@Body() updateChatDTO: UpdateChatDTO, @User() user) {
    if (updateChatDTO.moderatorId != user.id) {
      throw new UnauthorizedException("not allowed");
    }
    return this.chatService.updateChat(updateChatDTO);
  }

}
