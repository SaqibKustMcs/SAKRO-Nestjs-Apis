import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsObject, IsString, ValidateIf } from 'class-validator';
import { MessageEventEnum } from '../enum/message-evetn.enum';
import { UserStatusEnum } from '../enum/user-status.enum';

export class MessageDTO {
    @IsString()
    userId: string;
    @IsString()
    chatId: string;
    @IsString()
    message: string;
    @IsObject()
    messageBody: object;
    time?: Date;
    @IsArray()
    attachments?: any[];
    @IsEnum(MessageEventEnum)
    eventType: string;
    @IsString()
    eventId: string;
}

export class CreateChatDTO {
    @ApiProperty()
    title?: string;
    @ApiProperty()
    ownerUserId: string;
    @ApiProperty()
    userIds: string[];
    @ApiProperty()
    isMultiple: boolean;
}

export class UserChatDTO {
    @ApiProperty()
    chatId: string;
    @ApiProperty()
    userId: string;
}

export class AddUserToChatDTO extends UserChatDTO {
    @ApiProperty()
    moderatorId: string;
}

export class ReadChatDTO extends UserChatDTO {
    @ApiProperty()
    messageId: string;
}

export class FavouriteChatDTO extends UserChatDTO {
    @ApiProperty()
    isFavourite: boolean;
}

export class AddUserDTO {
    @ApiProperty()
    userId: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    pic: string;
    @ApiProperty()
    color: string;
}

export class PaginationDTO {
    @ApiProperty({ default: 0 })
    offset: string;
    @ApiProperty({ default: 10 })
    limit: string;
}


export class GetAllUsersDTO extends PaginationDTO {
    @ApiProperty({ required: false })
    excludeUsersChatId: string;
}

export class ChatHistoryQueryDTO extends PaginationDTO {
    @ApiProperty()
    chatId: string;
    @ApiProperty()
    userId: string;
}

export class MessageHistoryQueryDTO extends PaginationDTO {
    @ApiProperty()
    chatId: string;
    @ApiProperty()
    userId: string;
    @ApiProperty()
    messageId: string;
}

export class AllChatQueryDTO extends PaginationDTO {
    @ApiProperty()
    userId: string;
    @ApiProperty({ required: false, type: Boolean })
    filterIsFavourite: any;
    @ApiProperty({ required: false, type: Boolean })
    filterIsUnread: any;
    @ApiProperty({ required: false })
    filterSearch: string;
}

export class UserStatusDTO {
    @ApiProperty({ default: UserStatusEnum.AVAILABLE })
    @IsEnum(UserStatusEnum)
    status: UserStatusEnum;
    @ApiProperty()
    userId: string;
}

export class UserProfileDTO {
    @ApiProperty()
    name: string;
    @ApiProperty()
    pic: string;
    @ApiProperty()
    color: string;
}


export class UpdateChatDTO {
    @ApiProperty()
    moderatorId: string;
    @ApiProperty()
    chatId: string;
    @ApiProperty()
    title: string;
    @ApiProperty()
    image: string;
    @ApiProperty()
    purposeDetail: string;
}