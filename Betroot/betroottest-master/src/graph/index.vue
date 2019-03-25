<template>
  <div class="holder">

    <Menu :links="links" :activeLink="activeLink" />
    <Graph :groupBy="activeLink.layout" />

  </div>
</template>

<script>
import Menu from './menu'
import Graph from './graph'
import _ from 'lodash'

const MY_URL_PREFIX = 'graph';

const LINKS = [
    {
      name: 'None',
      path: '',
      layout: 'total'
    },
    {
      name: 'By country',
      path: '/country',
      layout: 'country'
    },
    {
      name: 'By day',
      path: '/day',
      layout: 'day'
    }
  ].map(d => {
    d.path = '#/' + MY_URL_PREFIX + d.path;
    d.active = false;
    return d;
  });


export default {
  components: {
    Menu,
    Graph
  },

  data () {
    return {
      activeLink: this.findActiveLink()
    }
  },

  computed: {
    links () {
      return LINKS;
    }
  },

  methods: {
    findActiveLink () {
      _.each(LINKS, l => {
        l.active = false;
      })
      var link = _.find(LINKS, l => l.path == '#' + this.$route.path);
      if(!link) {
        link = LINKS[0];
      }
      return link;
    }
  },

  watch: {
    '$route' (to, from) {
      this.activeLink = this.findActiveLink();
    }
  }
}
</script>

<style scoped>
  .holder {
    width: 500px;
    margin: auto;
  }
  .menu ul {
    padding: 0;
    margin: 0;
  }
  .menu li {
    text-align: left;
  }
</style>
