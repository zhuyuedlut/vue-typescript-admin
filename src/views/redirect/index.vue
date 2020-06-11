<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'redirect'
})
export default class extends Vue {
  created() {
    const { query, params: { path } } = this.$route
    console.log(path)
    this.$router.replace({ path: '/' + path, query })
  }

  render() {
    // Todo
  }
}
</script>

<style scoped>

</style>