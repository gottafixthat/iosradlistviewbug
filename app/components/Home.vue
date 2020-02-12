<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <!--
            Use the NavigationButton as a side-drawer button in Android
            because ActionItems are shown on the right side of the ActionBar
            -->
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"></NavigationButton>
            <!--
            Use the ActionItem for IOS with position set to left. Using the
            NavigationButton as a side-drawer button in iOS is not possible,
            because its function is to always navigate back in the application.
            -->
            <ActionItem icon="res://menu"
                android:visibility="collapsed"
                @tap="onDrawerButtonTap"
                ios.position="left">
            </ActionItem>
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>

        <GridLayout class="page__content">
            <RadListView ref="listView" row="1" col="0" for="item in myItems">
                <ListViewLinearLayout v-tkListViewLayout scrollDirection="Vertical" dynamicItemSize="true"/>
                <v-template if="item.event && !item.imageCount">
                    <GridLayout rows="50 50 auto 50" class="content-card" iosoverflowsafearea="false">
                        <DockLayout row="0" height="50" stretchLastChild="true">
                            <Image :src="item.avatar" class="avatar-circle user-avatar" dock="left" ></Image>
                            <Image src="res://noun_vertical_ellipsis" class="card-action"  dock="right"></Image>
                            <StackLayout orientation="vertical" height="50" verticalAlignment="middle" class="content-header">
                                <Label verticalAlignment="bottom">
                                    <FormattedString>
                                        <Span style="margin-right: 20;" class="postername" :text="item.postername + ' '"/>
                                        <Span class="username" :text="'@' + item.username"/>
                                    </FormattedString>
                                </Label>
                                <Label class="fa postdate" textWrap="false" verticalAlignment="top"> {{ icons.clock | fonticon }} {{ timeSince(item.time) }}</Label>
                            </StackLayout>
                        </DockLayout>

                        <ContentEvent row="1" :item="item"></ContentEvent>

                        <StackLayout row="2" style="padding: 3">
                            <HtmlView class="fa" textWrap="true" :html="item.body"></HtmlView>
                        </StackLayout>

                        <ContentFooter row="3" :item="item"></ContentFooter>

                    </GridLayout>
                </v-template>

                <v-template if="item.event && item.imageCount === 1">
                    <GridLayout rows="50 50 auto 300 50" class="content-card" iosoverflowsafearea="false">
                        <DockLayout row="0" height="50" stretchLastChild="true">
                            <Image :src="item.avatar" class="avatar-circle user-avatar" dock="left" ></Image>
                            <Image src="res://noun_vertical_ellipsis" class="card-action"  dock="right"></Image>
                            <StackLayout orientation="vertical" height="50" verticalAlignment="middle" class="content-header">
                                <Label verticalAlignment="bottom">
                                    <FormattedString>
                                        <Span style="margin-right: 20;" class="postername" :text="item.postername + ' '"/>
                                        <Span class="username" :text="'@' + item.username"/>
                                    </FormattedString>
                                </Label>
                                <Label class="fa postdate" textWrap="false" verticalAlignment="top"> {{ icons.clock | fonticon }} {{ timeSince(item.time) }}</Label>
                            </StackLayout>
                        </DockLayout>

                        <ContentEvent row="1" :item="item"></ContentEvent>

                        <StackLayout row="2" style="padding: 3">
                            <HtmlView class="fa" textWrap="true" :html="item.body"></HtmlView>
                        </StackLayout>

                        <Image row="3" :src="item.images[0].src" stretch="aspectFill" height="290"></Image>

                        <ContentFooter row="4" :item="item"></ContentFooter>

                    </GridLayout>
                </v-template>


                <v-template if="!item.event && item.imageCount === 1">
                    <GridLayout rows="50 auto 300 50" class="content-card" iosoverflowsafearea="false">
                        <DockLayout row="0" height="50" stretchLastChild="true">
                            <Image :src="item.avatar" class="avatar-circle user-avatar" dock="left" ></Image>
                            <Image src="res://noun_vertical_ellipsis" class="card-action"  dock="right"></Image>
                            <StackLayout orientation="vertical" height="50" verticalAlignment="middle" class="content-header">
                                <Label verticalAlignment="bottom">
                                    <FormattedString>
                                        <Span style="margin-right: 20;" class="postername" :text="item.postername + ' '"/>
                                        <Span class="username" :text="'@' + item.username"/>
                                    </FormattedString>
                                </Label>
                                <Label class="fa postdate" textWrap="false" verticalAlignment="top"> {{ icons.clock | fonticon }} {{ timeSince(item.time) }}</Label>
                            </StackLayout>
                        </DockLayout>

                        <StackLayout row="1" style="padding: 3">
                            <HtmlView class="fa" textWrap="true" :html="item.body"></HtmlView>
                        </StackLayout>

                        <Image row="2" :src="item.images[0].src" stretch="aspectFill" height="290"></Image>


                        <ContentFooter row="3" :item="item"></ContentFooter>

                    </GridLayout>
                </v-template>

                <v-template if="item.event && item.imageCount === 2">
                    <GridLayout rows="50 50 auto 300 50" class="content-card" iosoverflowsafearea="false">
                        <DockLayout row="0" height="50" stretchLastChild="true">
                            <Image :src="item.avatar" class="avatar-circle user-avatar" dock="left" ></Image>
                            <Image src="res://noun_vertical_ellipsis" class="card-action"  dock="right"></Image>
                            <StackLayout orientation="vertical" height="50" verticalAlignment="middle" class="content-header">
                                <Label verticalAlignment="bottom">
                                    <FormattedString>
                                        <Span style="margin-right: 20;" class="postername" :text="item.postername + ' '"/>
                                        <Span class="username" :text="'@' + item.username"/>
                                    </FormattedString>
                                </Label>
                                <Label class="fa postdate" textWrap="false" verticalAlignment="top"> {{ icons.clock | fonticon }} {{ timeSince(item.time) }}</Label>
                            </StackLayout>
                        </DockLayout>

                        <ContentEvent row="1" :item="item"></ContentEvent>

                        <StackLayout row="2" style="padding: 3">
                            <HtmlView class="fa" textWrap="true" :html="item.body"></HtmlView>
                        </StackLayout>

                        <StackLayout row="3" orientation="horizontal" height="300">
                            <Image :src="item.images[0].src" stretch="aspectFill" width="50%" height="300" style="border: 2 solid #ffffff"></Image>
                            <Image :src="item.images[1].src" stretch="aspectFill" width="50%" height="300" style="border: 2 solid #ffffff"></Image>
                        </StackLayout>

                        <ContentFooter row="4" :item="item"></ContentFooter>

                    </GridLayout>
                </v-template>

                <v-template if="!item.event && item.imageCount === 2">
                    <GridLayout rows="60 auto 300 50" class="content-card" iosoverflowsafearea="false">
                        <DockLayout row="0" height="50" stretchLastChild="true">
                            <Image :src="item.avatar" class="avatar-circle user-avatar" dock="left" ></Image>
                            <Image src="res://noun_vertical_ellipsis" class="card-action"  dock="right"></Image>
                            <StackLayout orientation="vertical" height="50" verticalAlignment="middle" class="content-header">
                                <Label verticalAlignment="bottom">
                                    <FormattedString>
                                        <Span style="margin-right: 20;" class="postername" :text="item.postername + ' '"/>
                                        <Span class="username" :text="'@' + item.username"/>
                                    </FormattedString>
                                </Label>
                                <Label class="fa postdate" textWrap="false" verticalAlignment="top"> {{ icons.clock | fonticon }} {{ timeSince(item.time) }}</Label>
                            </StackLayout>
                        </DockLayout>

                        <StackLayout row="1" style="padding: 3">
                            <HtmlView class="fa" textWrap="true" :html="item.body"></HtmlView>
                        </StackLayout>

                        <StackLayout row="2" orientation="horizontal" height="300">
                            <Image :src="item.images[0].src" stretch="aspectFill" width="50%" height="300" style="border: 2 solid #ffffff"></Image>
                            <Image :src="item.images[1].src" stretch="aspectFill" width="50%" height="300" style="border: 2 solid #ffffff"></Image>
                        </StackLayout>

                        <ContentFooter row="3" :item="item"></ContentFooter>

                    </GridLayout>
                </v-template>

                <v-template if="!item.event && item.imageCount > 2">
                    <GridLayout rows="50 auto 300 50" class="content-card" iosoverflowsafearea="false">
                        <DockLayout row="0" height="50" stretchLastChild="true">
                            <Image :src="item.avatar" class="avatar-circle user-avatar" dock="left" ></Image>
                            <Image src="res://noun_vertical_ellipsis" class="card-action"  dock="right"></Image>
                            <StackLayout orientation="vertical" height="50" verticalAlignment="middle" class="content-header">
                                <Label verticalAlignment="bottom">
                                    <FormattedString>
                                        <Span style="margin-right: 20;" class="postername" :text="item.postername + ' '"/>
                                        <Span class="username" :text="'@' + item.username"/>
                                    </FormattedString>
                                </Label>
                                <Label class="fa postdate" textWrap="false" verticalAlignment="top"> {{ icons.clock | fonticon }} {{ timeSince(item.time) }}</Label>
                            </StackLayout>
                        </DockLayout>

                        <StackLayout row="1" style="padding: 3">
                            <HtmlView class="fa" textWrap="true" :html="item.body"></HtmlView>
                        </StackLayout>

                        <StackLayout row="2" orientation="horizontal" height="300">
                            <Image :src="item.images[0].src" stretch="aspectFill" width="50%" height="300" style="border: 2 solid #ffffff"></Image>
                            <StackLayout width="50%" height="300">
                                <Image :src="item.images[1].src" stretch="aspectFill" height="150" style="border: 2 solid #ffffff"></Image>
                                <Image :src="item.images[2].src" stretch="aspectFill" height="150" style="border: 2 solid #ffffff"></Image>
                            </StackLayout>
                        </StackLayout>

                        <ContentFooter row="3" :item="item"></ContentFooter>

                    </GridLayout>
                </v-template>


                <v-template>
                    <GridLayout rows="50 auto 50" class="content-card" iosoverflowsafearea="false">
                        <DockLayout row="0" height="50" stretchLastChild="true">
                            <Image :src="item.avatar" class="avatar-circle user-avatar" dock="left" ></Image>
                            <Image src="res://noun_vertical_ellipsis" class="card-action"  dock="right"></Image>
                            <StackLayout orientation="vertical" height="50" verticalAlignment="middle" class="content-header">
                                <Label verticalAlignment="bottom">
                                    <FormattedString>
                                        <Span style="margin-right: 20;" class="postername" :text="item.postername + ' '"/>
                                        <Span class="username" :text="'@' + item.username"/>
                                    </FormattedString>
                                </Label>
                                <Label class="fa postdate" textWrap="false" verticalAlignment="top"> {{ icons.clock | fonticon }} {{ timeSince(item.time) }}</Label>
                            </StackLayout>
                        </DockLayout>

                        <StackLayout row="1" style="padding: 3">
                            <HtmlView class="fa" textWrap="true" :html="item.body"></HtmlView>
                        </StackLayout>

                        <ContentFooter row="2" :item="item"></ContentFooter>

                    </GridLayout>
                </v-template>
            </RadListView>
        </GridLayout>

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import { ObservableArray } from 'tns-core-modules/data/observable-array'
    import ContentEvent from "./ContentEvent";
    import ContentFooter from "./ContentFooter";


    export default {
        name: "PostInfo",
        components: {ContentEvent,ContentFooter},
        data() {
            return {
                items: new ObservableArray([
                    {
                        "id": "808",
                        "contentId": 506,
                        "title": "Event With Two Images",
                        "contentType": 3,
                        "body": "<p>Test event with two images</p>",
                        "time": "1581299361",
                        "lastActivity": "1581299361",
                        "poster": "11",
                        "allowComments": 1,
                        "disptime": "Feb 9, 2020, 5:49:21 PM",
                        "sc": false,
                        "likeCount": 0,
                        "commentCount": 0,
                        "imageCount": 2,
                        "liked": 0,
                        "canEdit": true,
                        "guestView": false,
                        "postername": "Marc Lewis",
                        "avatar": "res://unknownuser",
                        "username": "gottafixthat",
                        "images": [
                            {
                                "id": 264,
                                "title": "birthday.jpg",
                                "name": "birthday.jpg",
                                "src": "~/assets/images/image01.jpg",
                                "fileSize": 32922,
                                "mimeType": "image/jpeg",
                                "order": 0
                            },
                            {
                                "id": 265,
                                "title": "fireworks.jpg",
                                "name": "fireworks.jpg",
                                "src": "~/assets/images/image02.jpg",
                                "fileSize": 14081,
                                "mimeType": "image/jpeg",
                                "order": 0
                            }
                        ],
                        "communities": [
                            {
                                "id": 37,
                                "name": "Sargeant PTC",
                                "community": null
                            }
                        ],
                        "commentsLocked": 0,
                        "event": {
                            "id": 506,
                            "eventType": null,
                            "status": 0,
                            "allDay": 1,
                            "startTime": 1581926400,
                            "endTime": 1582012799,
                            "locations": []
                        }
                    },
                    {
                        "id": "807",
                        "contentId": 505,
                        "title": "Test Event With Image",
                        "contentType": 3,
                        "body": "<p>This is an event with an image</p>",
                        "time": "1581299061",
                        "lastActivity": "1581299061",
                        "poster": "11",
                        "allowComments": 1,
                        "disptime": "Feb 9, 2020, 5:44:21 PM",
                        "sc": false,
                        "likeCount": 1,
                        "commentCount": 0,
                        "imageCount": 1,
                        "liked": 1,
                        "canEdit": true,
                        "guestView": false,
                        "postername": "Marc Lewis",
                        "avatar": "res://unknownuser",
                        "username": "gottafixthat",
                        "images": [
                            {
                                "id": 263,
                                "title": "fireworks.jpg",
                                "name": "fireworks.jpg",
                                "src": "~/assets/images/image03.jpg",
                                "fileSize": 14081,
                                "mimeType": "image/jpeg",
                                "order": 0
                            }
                        ],
                        "communities": [
                            {
                                "id": 37,
                                "name": "Sargeant PTC",
                                "community": null
                            }
                        ],
                        "commentsLocked": 0,
                        "event": {
                            "id": 505,
                            "eventType": null,
                            "status": 0,
                            "allDay": 1,
                            "startTime": 1581321600,
                            "endTime": 1581407999,
                            "locations": []
                        }
                    },
                    {
                        "id": "806",
                        "contentId": 504,
                        "title": "",
                        "contentType": 1,
                        "body": "<p>Lets try a real two image post</p>",
                        "time": "1581296389",
                        "lastActivity": "1581296389",
                        "poster": "11",
                        "allowComments": 1,
                        "disptime": "Feb 9, 2020, 4:59:49 PM",
                        "sc": false,
                        "likeCount": 1,
                        "commentCount": 0,
                        "imageCount": 2,
                        "liked": 1,
                        "canEdit": true,
                        "guestView": false,
                        "postername": "Marc Lewis",
                        "avatar": "res://unknownuser",
                        "username": "gottafixthat",
                        "images": [
                            {
                                "id": 261,
                                "title": "iwanttoplay_cover_thumb.png",
                                "name": "iwanttoplay_cover_thumb.png",
                                "src": "~/assets/images/image04.jpg",
                                "fileSize": 40425,
                                "mimeType": "image/png",
                                "order": 0
                            },
                            {
                                "id": 262,
                                "title": "birthday.jpg",
                                "name": "birthday.jpg",
                                "src": "~/assets/images/image05.jpg",
                                "fileSize": 32922,
                                "mimeType": "image/jpeg",
                                "order": 0
                            }
                        ],
                        "communities": [
                            {
                                "id": 37,
                                "name": "Sargeant PTC",
                                "community": null
                            }
                        ],
                        "commentsLocked": 0
                    },
                    {
                        "id": "805",
                        "contentId": 503,
                        "title": "",
                        "contentType": 1,
                        "body": "<p>Two image post for testing layouts.</p>",
                        "time": "1581296204",
                        "lastActivity": "1581296204",
                        "poster": "11",
                        "allowComments": 1,
                        "disptime": "Feb 9, 2020, 4:56:44 PM",
                        "sc": false,
                        "likeCount": 1,
                        "commentCount": 0,
                        "imageCount": 1,
                        "liked": 1,
                        "canEdit": true,
                        "guestView": false,
                        "postername": "Marc Lewis",
                        "avatar": "res://unknownuser",
                        "username": "gottafixthat",
                        "images": [
                            {
                                "id": 257,
                                "title": "IMG_20170928_123814_01.jpg",
                                "name": "IMG_20170928_123814_01.jpg",
                                "src": "~/assets/images/image06.jpg",
                                "fileSize": 3773901,
                                "mimeType": "image/jpeg",
                                "order": 0
                            }
                        ],
                        "communities": [
                            {
                                "id": 37,
                                "name": "Sargeant PTC",
                                "community": null
                            }
                        ],
                        "commentsLocked": 0
                    },
                    {
                        "id": "804",
                        "contentId": 502,
                        "title": "",
                        "contentType": 1,
                        "body": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                        "time": "1580774061",
                        "lastActivity": "1580774061",
                        "poster": "11",
                        "allowComments": 1,
                        "disptime": "Feb 3, 2020, 3:54:21 PM",
                        "sc": false,
                        "likeCount": 1,
                        "commentCount": 0,
                        "imageCount": 0,
                        "liked": 1,
                        "canEdit": true,
                        "guestView": false,
                        "postername": "Marc Lewis",
                        "avatar": "res://unknownuser",
                        "username": "gottafixthat",
                        "communities": [
                            {
                                "id": 37,
                                "name": "Sargeant PTC",
                                "community": null
                            }
                        ],
                        "commentsLocked": 0
                    },
                    {
                        "id": "803",
                        "contentId": 501,
                        "title": "",
                        "contentType": 1,
                        "body": "<p>Need additional posts to check for scrolling errors.</p>",
                        "time": "1580774014",
                        "lastActivity": "1580774014",
                        "poster": "11",
                        "allowComments": 1,
                        "disptime": "Feb 3, 2020, 3:53:34 PM",
                        "sc": false,
                        "likeCount": 1,
                        "commentCount": 0,
                        "imageCount": 1,
                        "liked": 1,
                        "canEdit": true,
                        "guestView": false,
                        "postername": "Marc Lewis",
                        "avatar": "res://unknownuser",
                        "username": "gottafixthat",
                        "images": [
                            {
                                "id": 253,
                                "title": "ARGH.png",
                                "name": "ARGH.png",
                                "src": "~/assets/images/image07.jpg",
                                "fileSize": 141659,
                                "mimeType": "image/jpeg",
                                "order": 0
                            }
                        ],
                        "communities": [
                            {
                                "id": 37,
                                "name": "Sargeant PTC",
                                "community": null
                            }
                        ],
                        "commentsLocked": 0
                    },
                    {
                        "id": "802",
                        "contentId": 500,
                        "title": "",
                        "contentType": 1,
                        "body": "<p>Testing posts with file upload</p>",
                        "time": "1580069533",
                        "lastActivity": "1580069533",
                        "poster": "11",
                        "allowComments": 1,
                        "disptime": "Jan 26, 2020, 12:12:13 PM",
                        "sc": false,
                        "likeCount": 1,
                        "commentCount": 2,
                        "imageCount": 1,
                        "liked": 1,
                        "canEdit": true,
                        "guestView": false,
                        "postername": "Marc Lewis",
                        "avatar": "res://unknownuser",
                        "username": "gottafixthat",
                        "images": [
                            {
                                "id": 251,
                                "title": "iwanttoplay_cover_thumb.png",
                                "name": "iwanttoplay_cover_thumb.png",
                                "src": "~/assets/images/image08.jpg",
                                "fileSize": 40425,
                                "mimeType": "image/jpeg",
                                "order": 0
                            }
                        ],
                        "communities": [
                            {
                                "id": 37,
                                "name": "Sargeant PTC",
                                "community": null
                            }
                        ],
                        "commentsLocked": 0
                    },
                    {
                        "id": "791",
                        "contentId": 499,
                        "title": "This is a test event. Looks like it's working now.",
                        "contentType": 3,
                        "body": "<p>This is a test of the content posting. I might want to put a border around the whole thing instead of just the bottom. Might make it scroll a bit better and make this form look just a bit nicer.</p>",
                        "time": "1578443616",
                        "lastActivity": "1578443616",
                        "poster": "11",
                        "allowComments": 0,
                        "disptime": "Jan 7, 2020, 4:33:36 PM",
                        "sc": false,
                        "likeCount": 1,
                        "commentCount": 0,
                        "imageCount": 0,
                        "liked": 1,
                        "canEdit": true,
                        "guestView": false,
                        "postername": "Marc Lewis",
                        "avatar": "res://unknownuser",
                        "username": "gottafixthat",
                        "communities": [
                            {
                                "id": 37,
                                "name": "Sargeant PTC",
                                "community": null
                            }
                        ],
                        "commentsLocked": 0,
                        "event": {
                            "id": 499,
                            "eventType": null,
                            "status": 0,
                            "allDay": 0,
                            "startTime": 1578452400,
                            "endTime": 1578456023,
                            "locations": []
                        }
                    },
                    {
                        "id": "790",
                        "contentId": 498,
                        "title": null,
                        "contentType": 1,
                        "body": "<p>This is a test post to multiple communities. After I do this, I'm going to delete one of the communities.</p>",
                        "time": "1578004687",
                        "lastActivity": "1578004687",
                        "poster": "11",
                        "allowComments": 1,
                        "disptime": "Jan 2, 2020, 2:38:07 PM",
                        "sc": false,
                        "likeCount": 0,
                        "commentCount": 0,
                        "imageCount": 0,
                        "liked": 0,
                        "canEdit": true,
                        "guestView": false,
                        "postername": "Marc Lewis",
                        "avatar": "res://unknownuser",
                        "username": "gottafixthat",
                        "communities": [
                            {
                                "id": 37,
                                "name": "Sargeant PTC",
                                "community": null
                            }
                        ],
                        "commentsLocked": 0
                    },
                    {
                        "id": "801",
                        "contentId": 497,
                        "title": "Fundraiser",
                        "contentType": 3,
                        "body": "<p>This is a test for the date/time entries.</p><p>Matt got a 400 when he tried this.</p>",
                        "time": "1577988525",
                        "lastActivity": "1577988525",
                        "poster": "11",
                        "allowComments": 1,
                        "disptime": "Jan 2, 2020, 10:08:45 AM",
                        "sc": false,
                        "likeCount": 1,
                        "commentCount": 0,
                        "imageCount": 0,
                        "liked": 1,
                        "canEdit": true,
                        "guestView": false,
                        "postername": "Marc Lewis",
                        "avatar": "res://unknownuser",
                        "username": "gottafixthat",
                        "communities": [
                            {
                                "id": 37,
                                "name": "Sargeant PTC",
                                "community": null
                            }
                        ],
                        "commentsLocked": 0,
                        "event": {
                            "id": 497,
                            "eventType": null,
                            "status": 0,
                            "allDay": 0,
                            "startTime": 1580256000,
                            "endTime": 1580270400,
                            "locations": [
                                {
                                    "addressId": "13",
                                    "name": "Test Location",
                                    "address1": "7auto Sunrise Ave",
                                    "address2": "",
                                    "city": "Roseville",
                                    "state": "CA",
                                    "postal": "95661",
                                    "country": "US",
                                    "lat": "38.732420",
                                    "lon": "-121.270920",
                                    "validated": "0",
                                    "verify_count": "0",
                                    "invalid_count": "0",
                                    "status": "1",
                                    "visibility": "1"
                                }
                            ]
                        }
                    },
                    {
                        "id": "auto9",
                        "contentId": 469,
                        "title": "",
                        "contentType": 1,
                        "body": "<p>Welcome to dittos.io, we hope you enjoy your stay.</p>",
                        "time": "1563914906",
                        "lastActivity": "1563914906",
                        "poster": "2",
                        "allowComments": 1,
                        "disptime": "Jul 23, 2019, 1:48:26 PM",
                        "sc": false,
                        "likeCount": 1,
                        "commentCount": 2,
                        "imageCount": 0,
                        "liked": 0,
                        "canEdit": false,
                        "guestView": false,
                        "postername": "Marc Lewis",
                        "avatar": "res://unknownuser",
                        "username": "marclewis",
                        "communities": [
                            {
                                "id": 9,
                                "name": "dittos Announcements",
                                "community": "dittosannouncements"
                            }
                        ],
                        "commentsLocked": 0
                    },
                    {
                        "id": "auto6",
                        "contentId": 470,
                        "title": "",
                        "contentType": 1,
                        "body": "<p>Testing a post with lots of images</p>",
                        "time": "1563305638",
                        "lastActivity": "1563839182",
                        "poster": "2",
                        "allowComments": 1,
                        "disptime": "Jul 16, 2019, 12:33:58 PM",
                        "sc": false,
                        "likeCount": 1,
                        "commentCount": 3,
                        "imageCount": 5,
                        "liked": 1,
                        "canEdit": false,
                        "guestView": false,
                        "postername": "Marc Lewis",
                        "avatar": "res://unknownuser",
                        "username": "marclewis",
                        "images": [
                            {
                                "id": 235,
                                "title": "fark_Cw6l_5Aetg9_ozENPZBFbGLt6Lw.jpg",
                                "name": "fark_Cw6l_5Aetg9_ozENPZBFbGLt6Lw.jpg",
                                "src": "~/assets/images/image09.jpg",
                                "fileSize": 28547,
                                "mimeType": "image/jpeg",
                                "order": 0
                            },
                            {
                                "id": 237,
                                "title": "fark_Mc-tiBOZ4WJwk-4iZwc8ZmZr47Y.jpg",
                                "name": "fark_Mc-tiBOZ4WJwk-4iZwc8ZmZr47Y.jpg",
                                "src": "~/assets/images/image10.jpg",
                                "fileSize": 93682,
                                "mimeType": "image/jpeg",
                                "order": 0
                            },
                            {
                                "id": 238,
                                "title": "fark_vPpX3l260i-Gd7vgRFiAufc6v-Q.jpg",
                                "name": "fark_vPpX3l260i-Gd7vgRFiAufc6v-Q.jpg",
                                "src": "~/assets/images/image11.jpg",
                                "fileSize": 61411,
                                "mimeType": "image/jpeg",
                                "order": 0
                            },
                            {
                                "id": 240,
                                "title": "fark_ysdRUNTZnTuuEDds-C9FmYJ6n-c.jpg",
                                "name": "fark_ysdRUNTZnTuuEDds-C9FmYJ6n-c.jpg",
                                "src": "~/assets/images/image12.jpg",
                                "fileSize": 15817,
                                "mimeType": "image/jpeg",
                                "order": 0
                            },
                            {
                                "id": 241,
                                "title": "fb180529.gif",
                                "name": "fb180529.gif",
                                "src": "~/assets/images/image13.jpg",
                                "fileSize": 144335,
                                "mimeType": "image/jpeg",
                                "order": 0
                            }
                        ],
                        "communities": [
                            {
                                "id": 9,
                                "name": "dittos Announcements",
                                "community": "dittosannouncements"
                            }
                        ],
                        "commentsLocked": 0
                    },
                    {
                        "id": "auto1",
                        "contentId": 468,
                        "title": "",
                        "contentType": 1,
                        "body": "<p>Welcome to dittos.io, we hope you enjoy your stay.</p>",
                        "time": "1562784361",
                        "lastActivity": "1562784361",
                        "poster": "2",
                        "allowComments": 1,
                        "disptime": "Jul 10, 2019, 11:46:01 AM",
                        "sc": false,
                        "likeCount": 2,
                        "commentCount": 0,
                        "imageCount": 0,
                        "liked": 1,
                        "canEdit": false,
                        "guestView": false,
                        "postername": "Marc Lewis",
                        "avatar": "res://unknownuser",
                        "username": "marclewis",
                        "communities": [
                            {
                                "id": 9,
                                "name": "dittos Announcements",
                                "community": "dittosannouncements"
                            }
                        ],
                        "commentsLocked": 0
                    }
                ])
            }
        },
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Home");
        },
        computed: {
            myItems() {
              return this.items;
            },
            message() {
                return "<!-- This is now my page content -->";
            }
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },timeSince: function (ts) {
                let timeStamp = new Date(0);
                timeStamp.setUTCSeconds(ts);
                let now = new Date(),
                    secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
                if (secondsPast < 60) {
                    return parseInt(secondsPast) + 's';
                }
                if (secondsPast < 3600) {
                    return parseInt(secondsPast / 60) + 'm';
                }
                if (secondsPast <= 86400) {
                    return parseInt(secondsPast / 3600) + 'h';
                }
                if (secondsPast > 86400) {
                    let day = timeStamp.getDate();
                    let month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
                    let year = timeStamp.getFullYear() == now.getFullYear() ? "" : " " + timeStamp.getFullYear();
                    return day + " " + month + year;
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
    .content-header {
        font-size: 12;
    }
    .user-avatar {
        width: 35;
        height: 35;
        vertical-align: center;
        horizontal-align: center;
        margin: 7;
    }
    .card-action {
        height: 20;
        width: 20;
        margin-top: 10;
        padding-right: 10;
        vertical-align: top;
        horizontal-align: center;
    }
    .postername {
        color: #000000;
        margin-right: 10;
        font-size: 12;
        font-weight: bold;
    }
    .username {
        color: #858585;
        font-size: 10;
        padding-left: 10;
    }
    .postdate {
        font-size: 10;
        color: #303030;
        font-weight: normal;
    }
</style>
