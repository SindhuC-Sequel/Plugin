(function (global) {
    function BgChanger(selector) {
        const elements = document.querySelectorAll(selector);

        // Generate a random color in hexadecimal format
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // Loop through all selected elements and change the background color
        elements.forEach((el) => {
            el.addEventListener('click', function() {
                document.body.style.backgroundColor = getRandomColor();
            });
        });
    }

    // Expose the BgChanger function to the global window object
    global.BgChanger = BgChanger;
})(window);
