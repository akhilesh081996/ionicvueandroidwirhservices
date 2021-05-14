
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "blog-post",
  props: ["title"],
  template: "<h3>{{ title }}</h3>",
});
</script>