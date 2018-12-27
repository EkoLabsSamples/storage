export default {
    onInit: function(player, ctx) {
        let currentDate = new Date().toUTCString();

        player.storage.get('storageExampleId', { scope: 'episode' })
            .then(function(storageProxy) {
                // If value already exists, show it.
                let lastDateWatched = storageProxy.getItem('lastDateWatched');
                if (lastDateWatched) {
                    alert(`Welcome back! you last watched this episode at:\n${lastDateWatched}`);
                }

                // Set the new value for the next project playing / new session.
                storageProxy.setItem('lastDateWatched', currentDate);
            })
            .catch(function() { console.log('Error attempting to get storage...'); });
    }
};