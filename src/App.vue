<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <router-view class='rv' />
    <div class='footer'>
      <a class='silentLink' href='https://savaal.xyz'> Savaal (Beta Release) </a> - Made with <font-awesome-icon icon='heart'></font-awesome-icon> by Anirudh Rowjee
      (<a class='silentLink' href='https://github.com/anirudhRowjee'>Github</a>)
    </div>
  </div>
</template>

<style lang="scss">

.rv {
  min-height: 50vw;
  min-width: 100vw;
  text-align: center;
}

.footer{
  position: absolute;
  width: 100%;
  font-weight: bold;
  background-color: lightgreen;
}

.silentLink:link {
  text-decoration: none;
}

.silentLink:visited {
  text-decoration: none;
}

.silentLink:hover {
  text-decoration: underline;
}

.silentLink:active {
  text-decoration: underline;
}

</style>
