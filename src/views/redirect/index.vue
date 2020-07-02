<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'redirect'
})
export default class extends Vue {
  created() {
    const { query, params: { path } } = this.$route
    this.$router.replace({ path: '/' + path, query })
  }

  render() {
    // Avoid warning for missing template
  }
}
</script>

<style scoped>

</style>
