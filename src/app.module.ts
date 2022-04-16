import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GraphQLModule} from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import {AppResolver} from './app.resolver';
import {join} from 'path'
import {Userservices} from './services/user.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
       driver: ApolloDriver,
         installSubscriptionHandlers: true,
         autoSchemaFile: join(process.cwd(),'src/schema.gql')

    })
  ],
  controllers: [AppController],
  providers: [AppService,AppResolver,Userservices],
})
export class AppModule {}
