// Full list of configuration options available here:
            // https://github.com/hakimel/reveal.js#configuration
            Reveal.initialize({
                controls: false,
                progress: true,
                history: true,
                center: true,

                theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
                transition: Reveal.getQueryHash().transition || 'none', // default/cube/page/concave/zoom/linear/fade/none

                dependencies: [
                    { src: 'bower_components/highlightjs/highlight.pack.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
                ]
            });