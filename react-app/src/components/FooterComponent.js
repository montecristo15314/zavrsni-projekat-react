import React from 'react';

export default class FooterComponent extends React.Component {
    render() {
        return (
            <footer class="footer-info">
            <div class="footer-right">
                <a href="https://www.facebook.com/Mikolo%C5%A1ko-Dru%C5%A1tvo-Srbije-174915562529206/" target="_blank"  rel="noopener noreferrer"
                    title="Facebook"><i class="fab fa-facebook"></i></a>
                <a href="https://twitter.com/hashtag/mushrooms" target="_blank" rel="noopener noreferrer"
                    title="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/watch?v=y7mdAS7KlRw" title="YT channel" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
                <a href="https://github.com/montecristo15314/zavrsni-projekat-react" target="_blank" rel="noopener noreferrer" title="Github project"><i
                        class="fab fa-github"></i></a>
    
            </div>
    
            <div class="footer-left">

                <p class="footer-links">
                    <a href="index.html">Home <i class="fas fa-home"></i></a>
                </p>

                <div>Marko Marković &copy; 2019</div>
                <a href="mailto:random@mail.com">Contact mail</a>
            </div>
        </footer>
        );
    }
}
