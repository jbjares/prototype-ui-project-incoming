<template>
  <div id="app">
    <mdc-layout-app>
      <mdc-toolbar slot="toolbar" fixed>
        <mdc-toolbar-row>
          <mdc-toolbar-section align-start >
            <mdc-toolbar-menu-icon event="toggle-drawer"></mdc-toolbar-menu-icon>
            <mdc-toolbar-title>Personal Health Train - Project Inbox</mdc-toolbar-title>
          </mdc-toolbar-section>
        </mdc-toolbar-row>
      </mdc-toolbar>
      <mdc-drawer slot="drawer" toggle-on="toggle-drawer">
        <mdc-drawer-list>
          <mdc-drawer-item to="/" start-icon="home">Home</mdc-drawer-item>
          <mdc-drawer-item to="/project" start-icon="assignment">Inbox</mdc-drawer-item>
        </mdc-drawer-list>
      </mdc-drawer>
      <router-view></router-view>
    </mdc-layout-app>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body, #app {
  height: 100%;
  width: 100%;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
