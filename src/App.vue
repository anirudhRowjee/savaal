<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <router-view class='rv' />
    <div class='footer'>
      <a class='silentLink' href='https://savaal.xyz'> Savaal (Beta Release) </a> - Made with
      <font-awesome-icon icon='heart'></font-awesome-icon> by 
      <a class='silentLink' href='https://github.com/anirudhRowjee'> Anirudh Rowjee</a>
    </div>
  </div>
</template>

<style>

.rv {
  min-height: 48vw;
  min-width: 100vw;
  text-align: center;
}

.footer{
  position: absolute;
  width: 100%;
  background-color: lightgreen;
  color: black;
}

.silentLink:link {
  text-decoration: none;
  color: black;
}

.silentLink:visited {
  text-decoration: none;
}


</style>
