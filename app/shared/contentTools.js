
import Vue from 'nativescript-vue';
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

Vue.mixin({

    data() {
        return {
            icons: {},
        }
    },
    mounted() {
        // here you insert the icons that you want to use in the app
        this.icons = {
            search: 'fa-search',
            logout: 'fa-sign-out',
            tag: 'fa-tags',
            calendar: 'fa-calendar-alt',
            calendarO: 'fa-calendar-o',
            home: 'fa-home',
            bars: 'fa-bars',
            vellipsis: 'fa-ellipsis-v',
            clock: 'fa-clock-o',
            thumbsUpO: 'fa-thumbs-up-o',
            comment: 'fa-comment',
            download: 'fa-cloud-download',
            paperclip: 'fa-paperclip',
            plus: 'fa-plus',
            plusCircle: 'fa-plus-circle',
            calendarPlus: 'fa-calendar-plus',
            arrowLeft: 'fa-arrow-left',
            arrowCircleLeft: 'fa-arrow-circle-left',
            longArrowAltLeft: 'fa-long-arrow-alt-left',
            angleLeft: 'fa-angle-left',
            angleRight: 'fa-angle-right',
            reply: 'fa-reply',
            child: 'fa-child',
            userCircle: 'fa-user-circle',
            chevronDown: 'fa-chevron-down',
            birthdayCake: 'fa-birthday-cake',
            lock: 'fa-lock',
            building: 'fa-building',
            newspaperO: 'fa-newspaper-o',
            checkCircle: 'fa-check-circle',
            photo: 'fa-photo',
            video: 'fa-video',
            file: 'fa-file',
            remove: 'fa-remove',
            envelopeO: 'fa-envelope-o',
            flag: 'fa-flag',
            gears: 'fa-gears',
            edit: 'fa-edit',
            delete: 'fa-delete-o',
            mapMarker: 'fa-map-marker',
        }
    },
    methods: {
        timeSince: function (ts) {
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
        },

        monthDay: function(ts) {
            let timeStamp = new Date(0);
            timeStamp.setUTCSeconds(ts);
            return timeStamp.getDate();
        },
        monthAbbr: function(ts) {
            let timeStamp = new Date(0);
            timeStamp.setUTCSeconds(ts);
            return months[timeStamp.getMonth()];
        },
        eventDate: function(ts) {
            let timeStamp = new Date(0);
            timeStamp.setUTCSeconds(ts);
            return months[timeStamp.getMonth()] + " " + timeStamp.getDate() + ", " + timeStamp.getFullYear();
        },
        eventTime: function(ts, ad) {
            if (ad) return "All Day";
            let timeStamp = new Date(0);
            timeStamp.setUTCSeconds(ts);
            let ampm = "am";
            let h = timeStamp.getHours();
            if (h > 12) {
                h -= 12;
                ampm = "pm";
            }
            return h + ":" + ('0' + timeStamp.getMinutes()).slice(-2) + " " + ampm;
        },

        eventTimeRange: function(ts, te, ad) {
            if (ad) return "All Day";
            let st = this.eventTime(ts, ad);
            let et = this.eventTime(te, ad);
            return st + " - " + et;
        },

        getLikeText: function (liked, likeCount) {
            let l = parseInt(liked);
            let lc = parseInt(likeCount);
            if (lc === 0) return "";
            if (l === 0) return "";
            if (lc === 1 && l === 1) return "You like this";
            let others = lc - 1;
            if (others === 0) return "";
            if (others === 1) return "You and 1 other like this";
            return "You and " + others + " others like this";
        },

        readableFileSize: function (b) {
            let i = -1;
            const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
            do {
                b = b / 1024;
                i++;
            } while (b > 1024);

            return Math.max(b, 0.1).toFixed(1) + byteUnits[i];
        },

        shorten: function(src) {
            let cs = clip(src, 250, { html: true, maxLines: 10 });
            return cs;
        },

    }
})
