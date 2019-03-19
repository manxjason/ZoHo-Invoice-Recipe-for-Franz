module.exports = Franz => Franz.loop(() => Franz.setBadge(document.querySelector('.timer-running') != null ? 1 : 0));
