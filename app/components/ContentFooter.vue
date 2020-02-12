<template>
  <StackLayout orientation="vertical" height="50">
    <StackLayout height="20" class="likeBar" orientation="horizontal">
      <Label width="50%" style="text-align: left; padding-left: 10;" class="fa"><FormattedString><Span :color="item.liked?'blue':'black'">{{ icons.thumbsUpO | fonticon }}</Span><Span> {{ item.likeCount }} {{ getLikeText(item.liked, item.likeCount) }}</Span></FormattedString></Label>
      <Label width="50%" style="text-align: right; padding-right: 10;">{{ item.commentCount }} Comments </Label>
    </StackLayout>
    <StackLayout orientation="horizontal" class="like-buttons fa" height="30">
      <Button horizontalAlignment="stretch" width="50%" class="action-button" @tap="toggleLike(item.contentId)" :color="item.liked?'blue':'black'">{{ icons.thumbsUpO | fonticon }} Like</Button>
      <Button horizontalAlignment="stretch" width="50%" class="action-button" @tap="commentOnPost(item)" :visibility="item.allowComments?'visible':'collapse'">{{ icons.comment | fonticon }} Comment </Button>
    </StackLayout>
  </StackLayout>
</template>

<script>

  export default {
    name: "ContentFooter",
    props: {
      visible: Boolean,
      item: Object,
      showComments: Boolean,
    },
    data() {
      return {
        myShowComments: false,
        myComments: [],
        imageholder: '<Image src="{{ image }}" class="comment-userimage avatar-circle" height="25" width="25" stretch="aspectFill" />',
        location: {
          name: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
          postal: "",
        },
        ignoreTap: false,
      }
    },
    methods: {
      commentOnPost: function(item) {
        console.log("onItemTap called");
      },
      toggleLike: function(cid) {
        console.log("toggleLike called");
      },
      // Gets called when the user taps the ellipsis, it sends an event back to the parent to open the action menu
      actionTapped: function(e) {
        this.ignoreTap = true
        console.log("Content actionTapped...")
        this.$emit('actionTapped', this.item)
      },
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
