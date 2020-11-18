import { Component } from '@angular/core';
import { Options } from 'tsparticles/dist/Options/Classes/Options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-website';
  particleParams = {
    background: {
      color: {
        value: '#fff'
      }
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: '#000'
      },
      links: {
        color: '#ccc',
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1
      },
      move: {
        direction: 'none',
        enable: true,
        outMode: 'bounce',
        random: true,
        speed: 1,
        straight: true,
        trail: {
          enable: true,
          fillColor: '#fff',
          length: 10
        },
      },
      number: {
        value: 150
      },
      opacity: {
        value: 0.1
      },
      shape: {
        type: 'circle'
      },
      size: {
        random: true,
        value: 1
      }
    },
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: {
          enable: true,
          mode: 'light',
          parallax: {
            enable: true,
            force: 2,
            smooth: 10
          }
        },
        resize: true
      },
      modes: {
        light: {
          area: {
            gradient: {
              start: {
                value: '#ffffff'
              },
              stop: {
                value: '#000000'
              }
            },
            radius: 5000
          },
          shadow: {
            color: {
              value: '#000000'
            },
            length: 2000
          }
        },
      }
    },
    detectRetina: true
  };
}
