<template>

      <GridLayout rows="50" columns="auto * auto" padding="0" margin="0" :visibility="item.contentType === 3?'visible':'collapse'" @tap="viewPost(item)">
        <!-- Colored Box with day and month -->
        <GridLayout col="0" rows="* auto" columns="auto" class="dateBox" padding="0">
          <Label class="dateBoxDay" row="0">{{ monthDay(item.event.startTime) }}</Label>
          <Label class="dateBoxMonth" row="1">{{ monthAbbr(item.event.startTime) }}</Label>
        </GridLayout>
        <!-- Event Date/Time -->
        <GridLayout col="1" rows="auto,*" columns="*">
          <Label class="eventTitle" row="0" col="0">{{ item.title }}</Label>
          <GridLayout row="1" col="0" rows="* *" columns="auto,*">
            <Label class="fa eventIcon" textWrap="false" row="0" col="0" verticalAlignment="top">{{ icons.calendarO | fonticon }}</Label>
            <Label class="fa eventDateTime" textWrap="false" row="0" col="1" verticalAlignment="top">{{ eventDate(item.event.startTime) }}</Label>
            <Label class="fa eventIcon" textWrap="false" row="1" col="0">{{ icons.clock | fonticon }}</Label>
            <Label class="fa eventDateTime" textWrap="false" row="1" col="1">{{ eventTimeRange(item.event.startTime, item.event.endTime, item.event.allDay) }}</Label>
          </GridLayout>
        </GridLayout>
        <!-- Location -->
        <GridLayout col="2" rows="auto,*" columns="*" :visibility="item.event.locations.length?'visible':'collapsed'">
          <Label class="eventLocationTitle" row="0" col="0">{{ location.name }}</Label>
          <GridLayout row="1" col="0" rows="* * *" columns="auto,*">
            <Label class="fa eventIcon" textWrap="false" row="0" col="0" :visibility="item.event.locations.length?'visible':'collapsed'" verticalAlignment="top">{{ icons.mapMarker | fonticon }}</Label>
            <Label row="0" col="1" class="eventLocation" textWrap="false" :visibility="(location.address1.length)?'visible':'collapsed'" verticalAlignment="top">{{ location.address1 }}</Label>
            <Label row="1" col="1" class="eventLocation" textWrap="false" :visibility="(location.address2.length)?'visible':'collapsed'">{{ location.address2 }}</Label>
            <GridLayout row="2" col="1" rows="*" columns="auto auto auto">
              <Label row="0" col="0" class="eventLocation" textWrap="false" :visibility="(location.city.length)?'visible':'collapsed'">{{ location.city }}</Label>
              <Label row="0" col="1" class="eventLocation" textWrap="false" :visibility="(location.state.length)?'visible':'collapsed'">{{ location.state }}</Label>
              <Label row="0" col="2" class="eventLocation" textWrap="false" :visibility="(location.postal.length)?'visible':'collapsed'">{{ location.postal }}</Label>
            </GridLayout>
          </GridLayout>
        </GridLayout>
      </GridLayout>


</template>

<script>
  export default {
    name: "ContentEvent",
    props: {
      visible: Boolean,
      item: Object,
    },
    data() {
      return {
        location: {
          name: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
          postal: "",
        },
      }
    },
    created() {
      //console.log("Show Comments: " + this.myShowComments)
      if (this.item.event) {
        //console.log("Event:");
        //console.dir(this.item.event);
        if (this.item.event.locations.length) {
          this.location.name = this.item.event.locations[0].name
          this.location.address1 = this.item.event.locations[0].address1
          this.location.address2 = this.item.event.locations[0].address2
          this.location.city = this.item.event.locations[0].city
          this.location.state = this.item.event.locations[0].state
          this.location.postal = this.item.event.locations[0].postal
        }
      }
    }
  }

</script>

<style scoped>
  StackLayout {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }
  GridLayout {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }

</style>
