<template>
    <div>
      <account-info :username="user.username" />
    </div>
   </template>
    
   <script>
   import AccountInfo from "@/views/AccountInfo.vue";
    
   export default {
       name:"profilepage",
    components: {
      AccountInfo
    },
    data() {
      return {
        user: {
          username: 'matt'
        }
      }
    }
   }
   </script>