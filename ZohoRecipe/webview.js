module.exports = (Franz) => {
    function getTimer() {
        if (document.querySelector('.timer-running') != null){
            Franz.setBadge(1);     
        }        else{
            Franz.setBadge(0);
        }
    }
    Franz.loop(getTimer);
  }