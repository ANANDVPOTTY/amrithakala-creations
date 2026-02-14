import { keyframes } from "@mui/material/styles";

/*-------| Title Reveal — fade in + rise + letter-spacing settle |-------*/
export const titleReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
    letter-spacing: 0.25em;
  }
  60% {
    opacity: 1;
    letter-spacing: 0.05em;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    letter-spacing: normal;
  }
`;

/*-------| Gradient Flow — smooth shifting background position |-------*/
export const gradientFlow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

/*-------| Fade In Up — generic entrance for body text |-------*/
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/*-------| Pulse — gentle scale breathing for CTA buttons |-------*/
export const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
`;

/*-------| Slide In Left — entrance from the left for images |-------*/
export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px) rotate(-2deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }
`;

/*-------| Slide In Right — entrance from the right for overlapping images |-------*/
export const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px) translateY(20px) rotate(2deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0) rotate(0deg);
  }
`;

/*-------| Scale Reveal — fade in + scale up for gallery cards |-------*/
export const scaleReveal = keyframes`
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
