import styled from "styled-components";

export const Main = styled.main`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
   background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(18%2c 18%2c 20%2c 1)'%3e%3c/rect%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)'%3e%3cpath d='M85.5 294.5L104.5 275.5L123.5 275.5L142.5 275.5L161.5 275.5M47.5 275.5L66.5 275.5L85.5 275.5L104.5 256.5M-9.5 275.5L9.5 275.5L28.5 275.5L47.5 275.5L66.5 294.5L85.5 294.5L104.5 294.5' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='3.17'%3e%3c/path%3e%3cpath d='M99.75 294.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM156.75 275.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM99.75 256.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M66.5 313.5L85.5 332.5M123.5 313.5L142.5 313.5L161.5 313.5M180.5 332.5L199.5 313.5L218.5 313.5L237.5 313.5M-9.5 294.5L9.5 294.5L28.5 294.5L47.5 313.5L66.5 313.5L85.5 313.5L104.5 313.5L123.5 313.5L142.5 332.5L161.5 332.5L180.5 332.5L199.5 332.5L218.5 332.5' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='3.17'%3e%3c/path%3e%3cpath d='M213.75 332.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM80.75 332.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM156.75 313.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM232.75 313.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M218.5 237.5L237.5 256.5L256.5 275.5M47.5 256.5L66.5 256.5L85.5 256.5M237.5 237.5L256.5 237.5L275.5 237.5L294.5 237.5M-9.5 256.5L9.5 256.5L28.5 256.5L47.5 256.5L66.5 237.5L85.5 237.5L104.5 237.5L123.5 237.5L142.5 237.5L161.5 237.5L180.5 237.5L199.5 237.5L218.5 237.5L237.5 237.5L256.5 256.5' stroke='rgba(255%2c 66%2c 127%2c 1)' stroke-width='3.17'%3e%3c/path%3e%3cpath d='M251.75 256.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM251.75 275.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM80.75 256.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM289.75 237.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z' fill='rgba(255%2c 66%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M313.5 332.5L332.5 313.5L351.5 313.5L370.5 313.5L389.5 313.5L408.5 294.5L427.5 294.5M522.5 294.5L541.5 275.5L560.5 275.5L579.5 275.5L598.5 275.5M579.5 332.5L598.5 351.5L617.5 351.5L636.5 351.5L655.5 351.5M332.5 332.5L351.5 351.5M598.5 332.5L617.5 313.5L636.5 294.5L655.5 294.5L674.5 294.5L693.5 294.5L712.5 294.5L731.5 294.5L750.5 294.5L769.5 294.5L788.5 294.5L807.5 294.5L826.5 294.5L845.5 294.5M427.5 313.5L446.5 332.5L465.5 332.5L484.5 332.5L503.5 332.5M484.5 313.5L503.5 294.5L522.5 275.5L541.5 256.5L560.5 256.5L579.5 256.5L598.5 256.5M104.5 351.5L123.5 332.5M503.5 313.5L522.5 313.5L541.5 313.5L560.5 332.5L579.5 351.5L598.5 370.5L617.5 370.5L636.5 370.5M560.5 313.5L579.5 313.5L598.5 313.5L617.5 294.5L636.5 275.5L655.5 275.5L674.5 275.5L693.5 275.5L712.5 275.5M-9.5 313.5L9.5 313.5L28.5 313.5L47.5 332.5L66.5 351.5L85.5 351.5L104.5 351.5L123.5 351.5L142.5 351.5L161.5 351.5L180.5 351.5L199.5 351.5L218.5 351.5L237.5 351.5L256.5 332.5L275.5 332.5L294.5 332.5L313.5 332.5L332.5 332.5L351.5 332.5L370.5 332.5L389.5 332.5L408.5 313.5L427.5 313.5L446.5 313.5L465.5 313.5L484.5 313.5L503.5 313.5L522.5 294.5L541.5 294.5L560.5 313.5L579.5 332.5L598.5 332.5L617.5 332.5L636.5 332.5L655.5 332.5L674.5 332.5L693.5 332.5L712.5 313.5L731.5 313.5L750.5 313.5L769.5 313.5' stroke='rgba(255%2c 66%2c 127%2c 1)' stroke-width='3.17'%3e%3c/path%3e%3cpath d='M764.75 313.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM422.75 294.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM593.75 275.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM650.75 351.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM346.75 351.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM840.75 294.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM498.75 332.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM593.75 256.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM118.75 332.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM631.75 370.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM707.75 275.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z' fill='rgba(255%2c 66%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M446.5 218.5L465.5 237.5L484.5 237.5L503.5 237.5L522.5 237.5L541.5 237.5L560.5 237.5M408.5 218.5L427.5 237.5L446.5 237.5L465.5 256.5M769.5 180.5L788.5 199.5L807.5 199.5L826.5 199.5L845.5 199.5M313.5 218.5L332.5 237.5L351.5 237.5L370.5 256.5L389.5 256.5L408.5 256.5L427.5 256.5L446.5 256.5M712.5 180.5L731.5 199.5L750.5 199.5L769.5 199.5L788.5 218.5M370.5 218.5L389.5 237.5M674.5 180.5L693.5 199.5L712.5 199.5L731.5 218.5L750.5 218.5L769.5 218.5L788.5 237.5L807.5 237.5L826.5 237.5L845.5 237.5M598.5 218.5L617.5 237.5L636.5 237.5L655.5 237.5L674.5 237.5L693.5 237.5L712.5 237.5L731.5 237.5L750.5 237.5L769.5 237.5M617.5 218.5L636.5 218.5L655.5 218.5M579.5 218.5L598.5 237.5M655.5 199.5L674.5 199.5L693.5 218.5L712.5 218.5M-9.5 237.5L9.5 237.5L28.5 237.5L47.5 237.5L66.5 218.5L85.5 218.5L104.5 218.5L123.5 218.5L142.5 218.5L161.5 218.5L180.5 218.5L199.5 218.5L218.5 218.5L237.5 218.5L256.5 218.5L275.5 218.5L294.5 218.5L313.5 218.5L332.5 218.5L351.5 218.5L370.5 218.5L389.5 218.5L408.5 218.5L427.5 218.5L446.5 218.5L465.5 218.5L484.5 218.5L503.5 218.5L522.5 218.5L541.5 218.5L560.5 218.5L579.5 218.5L598.5 218.5L617.5 218.5L636.5 199.5L655.5 199.5L674.5 180.5L693.5 180.5L712.5 180.5L731.5 180.5L750.5 180.5L769.5 180.5L788.5 180.5L807.5 180.5' stroke='rgba(255%2c 66%2c 127%2c 1)' stroke-width='3.17'%3e%3c/path%3e%3cpath d='M802.75 180.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM555.75 237.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM460.75 256.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM840.75 199.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM441.75 256.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM783.75 218.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM384.75 237.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM840.75 237.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM764.75 237.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM650.75 218.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM593.75 237.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM707.75 218.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z' fill='rgba(255%2c 66%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M427.5 370.5L446.5 370.5L465.5 370.5L484.5 370.5L503.5 370.5M598.5 389.5L617.5 408.5L636.5 408.5L655.5 408.5L674.5 408.5L693.5 408.5L712.5 427.5M256.5 389.5L275.5 370.5L294.5 370.5L313.5 370.5L332.5 370.5M579.5 389.5L598.5 408.5L617.5 427.5L636.5 427.5L655.5 427.5M370.5 370.5L389.5 389.5L408.5 389.5L427.5 389.5M389.5 370.5L408.5 351.5L427.5 351.5M503.5 389.5L522.5 408.5L541.5 408.5M484.5 389.5L503.5 408.5M-9.5 332.5L9.5 332.5L28.5 332.5L47.5 351.5L66.5 370.5L85.5 370.5L104.5 370.5L123.5 370.5L142.5 370.5L161.5 370.5L180.5 370.5L199.5 370.5L218.5 370.5L237.5 370.5L256.5 389.5L275.5 389.5L294.5 389.5L313.5 389.5L332.5 389.5L351.5 370.5L370.5 370.5L389.5 370.5L408.5 370.5L427.5 370.5L446.5 389.5L465.5 389.5L484.5 389.5L503.5 389.5L522.5 389.5L541.5 389.5L560.5 389.5L579.5 389.5L598.5 389.5L617.5 389.5L636.5 389.5' stroke='rgba(255%2c 66%2c 127%2c 1)' stroke-width='3.17'%3e%3c/path%3e%3cpath d='M631.75 389.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM498.75 370.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM707.75 427.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM327.75 370.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM650.75 427.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM422.75 389.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM422.75 351.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM536.75 408.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM498.75 408.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z' fill='rgba(255%2c 66%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M408.5 199.5L427.5 180.5L446.5 180.5M465.5 199.5L484.5 180.5L503.5 180.5L522.5 180.5L541.5 180.5L560.5 180.5L579.5 180.5L598.5 180.5L617.5 180.5L636.5 161.5L655.5 142.5M123.5 199.5L142.5 180.5M712.5 161.5L731.5 142.5L750.5 142.5M674.5 161.5L693.5 142.5M370.5 199.5L389.5 180.5M313.5 199.5L332.5 180.5L351.5 180.5L370.5 180.5M-9.5 218.5L9.5 218.5L28.5 218.5L47.5 218.5L66.5 199.5L85.5 199.5L104.5 199.5L123.5 199.5L142.5 199.5L161.5 199.5L180.5 199.5L199.5 199.5L218.5 199.5L237.5 199.5L256.5 199.5L275.5 199.5L294.5 199.5L313.5 199.5L332.5 199.5L351.5 199.5L370.5 199.5L389.5 199.5L408.5 199.5L427.5 199.5L446.5 199.5L465.5 199.5L484.5 199.5L503.5 199.5L522.5 199.5L541.5 199.5L560.5 199.5L579.5 199.5L598.5 199.5L617.5 199.5L636.5 180.5L655.5 180.5L674.5 161.5L693.5 161.5L712.5 161.5L731.5 161.5L750.5 161.5' stroke='rgba(255%2c 66%2c 127%2c 1)' stroke-width='3.17'%3e%3c/path%3e%3cpath d='M745.75 161.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM441.75 180.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM650.75 142.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM137.75 180.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM745.75 142.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM688.75 142.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM384.75 180.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM365.75 180.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z' fill='rgba(255%2c 66%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M427.5 408.5L446.5 427.5L465.5 427.5M389.5 408.5L408.5 427.5M351.5 408.5L370.5 389.5M-9.5 351.5L9.5 351.5L28.5 351.5L47.5 370.5L66.5 389.5L85.5 389.5L104.5 389.5L123.5 389.5L142.5 389.5L161.5 389.5L180.5 389.5L199.5 389.5L218.5 389.5L237.5 389.5L256.5 408.5L275.5 408.5L294.5 408.5L313.5 408.5L332.5 408.5L351.5 408.5L370.5 408.5L389.5 408.5L408.5 408.5L427.5 408.5L446.5 408.5L465.5 408.5' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='3.17'%3e%3c/path%3e%3cpath d='M460.75 408.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM460.75 427.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM403.75 427.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM365.75 389.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M598.5 142.5L617.5 161.5M161.5 180.5L180.5 161.5M560.5 142.5L579.5 161.5L598.5 161.5M503.5 142.5L522.5 161.5L541.5 161.5L560.5 161.5M142.5 161.5L161.5 161.5M617.5 142.5L636.5 123.5L655.5 123.5L674.5 123.5M256.5 180.5L275.5 161.5L294.5 161.5L313.5 142.5M484.5 161.5L503.5 161.5M-9.5 199.5L9.5 199.5L28.5 199.5L47.5 199.5L66.5 180.5L85.5 180.5L104.5 161.5L123.5 161.5L142.5 161.5L161.5 180.5L180.5 180.5L199.5 180.5L218.5 180.5L237.5 180.5L256.5 180.5L275.5 180.5L294.5 180.5L313.5 161.5L332.5 161.5L351.5 161.5L370.5 161.5L389.5 161.5L408.5 161.5L427.5 161.5L446.5 161.5L465.5 161.5L484.5 161.5L503.5 142.5L522.5 142.5L541.5 142.5L560.5 142.5L579.5 142.5L598.5 142.5L617.5 142.5L636.5 142.5' stroke='rgba(255%2c 66%2c 127%2c 1)' stroke-width='3.17'%3e%3c/path%3e%3cpath d='M631.75 142.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM612.75 161.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM175.75 161.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM593.75 161.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM555.75 161.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM156.75 161.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM669.75 123.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM308.75 142.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM498.75 161.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z' fill='rgba(255%2c 66%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M313.5 427.5L332.5 446.5L351.5 446.5L370.5 446.5M370.5 427.5L389.5 427.5M-9.5 370.5L9.5 370.5L28.5 370.5L47.5 389.5L66.5 408.5L85.5 408.5L104.5 408.5L123.5 408.5L142.5 408.5L161.5 408.5L180.5 408.5L199.5 408.5L218.5 408.5L237.5 408.5L256.5 427.5L275.5 427.5L294.5 427.5L313.5 427.5L332.5 427.5L351.5 427.5L370.5 427.5L389.5 446.5' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='3.17'%3e%3c/path%3e%3cpath d='M384.75 446.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM365.75 446.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM384.75 427.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M-9.5 180.5L9.5 180.5L28.5 180.5L47.5 180.5L66.5 161.5L85.5 161.5L104.5 142.5L123.5 142.5L142.5 142.5' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='3.17'%3e%3c/path%3e%3cpath d='M137.75 142.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M408.5 465.5L427.5 446.5L446.5 446.5L465.5 446.5L484.5 446.5M674.5 446.5L693.5 465.5L712.5 484.5L731.5 484.5L750.5 484.5L769.5 484.5L788.5 484.5L807.5 484.5L826.5 484.5L845.5 484.5M579.5 484.5L598.5 484.5L617.5 484.5M712.5 446.5L731.5 465.5L750.5 465.5L769.5 465.5M560.5 484.5L579.5 465.5M598.5 465.5L617.5 446.5L636.5 446.5L655.5 446.5M522.5 465.5L541.5 465.5L560.5 465.5L579.5 446.5L598.5 446.5M750.5 446.5L769.5 427.5L788.5 427.5L807.5 427.5M731.5 446.5L750.5 427.5M484.5 465.5L503.5 484.5M-9.5 389.5L9.5 389.5L28.5 389.5L47.5 408.5L66.5 427.5L85.5 427.5L104.5 427.5L123.5 427.5L142.5 427.5L161.5 427.5L180.5 427.5L199.5 427.5L218.5 427.5L237.5 427.5L256.5 446.5L275.5 446.5L294.5 446.5L313.5 465.5L332.5 465.5L351.5 465.5L370.5 465.5L389.5 465.5L408.5 465.5L427.5 465.5L446.5 465.5L465.5 465.5L484.5 465.5L503.5 465.5L522.5 465.5L541.5 484.5L560.5 484.5L579.5 484.5L598.5 465.5L617.5 465.5L636.5 465.5L655.5 465.5L674.5 446.5L693.5 446.5L712.5 446.5L731.5 446.5L750.5 446.5L769.5 446.5L788.5 465.5' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='3.17'%3e%3c/path%3e%3cpath d='M783.75 465.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM479.75 446.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM840.75 484.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM612.75 484.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM764.75 465.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM574.75 465.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM650.75 446.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM593.75 446.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM802.75 427.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM745.75 427.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM498.75 484.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M313.5 123.5L332.5 123.5M237.5 123.5L256.5 142.5L275.5 142.5L294.5 142.5M218.5 123.5L237.5 142.5L256.5 161.5M161.5 123.5L180.5 142.5L199.5 142.5L218.5 142.5L237.5 161.5M389.5 142.5L408.5 123.5L427.5 123.5L446.5 123.5M351.5 142.5L370.5 123.5L389.5 123.5M465.5 142.5L484.5 123.5M-9.5 161.5L9.5 161.5L28.5 161.5L47.5 161.5L66.5 142.5L85.5 142.5L104.5 123.5L123.5 123.5L142.5 123.5L161.5 123.5L180.5 123.5L199.5 123.5L218.5 123.5L237.5 123.5L256.5 123.5L275.5 123.5L294.5 123.5L313.5 123.5L332.5 142.5L351.5 142.5L370.5 142.5L389.5 142.5L408.5 142.5L427.5 142.5L446.5 142.5L465.5 142.5L484.5 142.5L503.5 123.5L522.5 123.5L541.5 123.5L560.5 123.5L579.5 123.5L598.5 123.5' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='3.17'%3e%3c/path%3e%3cpath d='M593.75 123.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM327.75 123.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM289.75 142.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM251.75 161.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM232.75 161.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM441.75 123.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM384.75 123.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM479.75 123.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M256.5 465.5L275.5 484.5L294.5 484.5L313.5 503.5M142.5 446.5L161.5 465.5L180.5 465.5M104.5 446.5L123.5 465.5L142.5 465.5M332.5 484.5L351.5 503.5L370.5 522.5L389.5 522.5L408.5 522.5L427.5 522.5L446.5 522.5L465.5 522.5L484.5 522.5M9.5 408.5L28.5 427.5L47.5 446.5M-9.5 408.5L9.5 408.5L28.5 408.5L47.5 427.5L66.5 446.5L85.5 446.5L104.5 446.5L123.5 446.5L142.5 446.5L161.5 446.5L180.5 446.5L199.5 446.5L218.5 446.5L237.5 446.5L256.5 465.5L275.5 465.5L294.5 465.5L313.5 484.5L332.5 484.5L351.5 484.5' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='3.17'%3e%3c/path%3e%3cpath d='M346.75 484.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM308.75 503.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM175.75 465.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM137.75 465.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM479.75 522.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM42.75 446.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M218.5 104.5L237.5 85.5L256.5 85.5L275.5 66.5L294.5 66.5L313.5 66.5M370.5 85.5L389.5 66.5L408.5 66.5L427.5 66.5M446.5 104.5L465.5 85.5M351.5 85.5L370.5 104.5M408.5 104.5L427.5 85.5L446.5 85.5L465.5 66.5L484.5 66.5L503.5 66.5L522.5 66.5L541.5 66.5L560.5 66.5L579.5 66.5L598.5 66.5L617.5 66.5L636.5 66.5M161.5 104.5L180.5 85.5L199.5 85.5L218.5 85.5M66.5 123.5L85.5 104.5L104.5 85.5L123.5 85.5M275.5 104.5L294.5 85.5M-9.5 142.5L9.5 142.5L28.5 142.5L47.5 142.5L66.5 123.5L85.5 123.5L104.5 104.5L123.5 104.5L142.5 104.5L161.5 104.5L180.5 104.5L199.5 104.5L218.5 104.5L237.5 104.5L256.5 104.5L275.5 104.5L294.5 104.5L313.5 85.5L332.5 85.5L351.5 85.5L370.5 85.5L389.5 104.5L408.5 104.5L427.5 104.5L446.5 104.5L465.5 104.5L484.5 104.5L503.5 104.5L522.5 104.5L541.5 104.5L560.5 104.5L579.5 104.5L598.5 104.5L617.5 104.5' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='3.17'%3e%3c/path%3e%3cpath d='M612.75 104.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM308.75 66.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM422.75 66.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM460.75 85.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM365.75 104.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM631.75 66.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM213.75 85.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM118.75 85.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM289.75 85.5 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3cpath d='M102.12 294.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM159.12 275.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM102.12 256.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M216.12 332.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM83.12 332.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM159.12 313.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM235.12 313.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M254.12 256.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM254.12 275.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM83.12 256.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM292.12 237.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M767.12 313.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM425.12 294.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM596.12 275.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM653.12 351.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM349.12 351.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM843.12 294.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM501.12 332.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM596.12 256.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM121.12 332.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM634.12 370.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM710.12 275.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M805.12 180.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM558.12 237.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM463.12 256.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM843.12 199.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM444.12 256.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM786.12 218.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM387.12 237.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM843.12 237.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM767.12 237.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM653.12 218.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM596.12 237.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM710.12 218.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M634.12 389.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM501.12 370.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM710.12 427.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM330.12 370.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM653.12 427.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM425.12 389.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM425.12 351.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM539.12 408.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM501.12 408.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M748.12 161.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM444.12 180.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM653.12 142.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM140.12 180.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM748.12 142.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM691.12 142.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM387.12 180.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM368.12 180.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M463.12 408.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM463.12 427.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM406.12 427.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM368.12 389.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M634.12 142.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM615.12 161.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM178.12 161.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM596.12 161.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM558.12 161.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM159.12 161.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM672.12 123.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM311.12 142.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM501.12 161.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M387.12 446.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM368.12 446.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM387.12 427.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M140.12 142.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M786.12 465.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM482.12 446.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM843.12 484.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM615.12 484.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM767.12 465.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM577.12 465.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM653.12 446.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM596.12 446.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM805.12 427.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM748.12 427.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM501.12 484.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M596.12 123.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM330.12 123.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM292.12 142.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM254.12 161.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM235.12 161.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM444.12 123.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM387.12 123.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM482.12 123.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M349.12 484.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM311.12 503.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM178.12 465.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM140.12 465.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM482.12 522.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM45.12 446.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M615.12 104.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM311.12 66.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM425.12 66.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM463.12 85.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM368.12 104.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM634.12 66.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM216.12 85.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM121.12 85.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0zM292.12 85.5 a2.38 2.38 0 1 0 4.76 0 a2.38 2.38 0 1 0 -4.76 0z' fill='black'%3e%3c/path%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    flex-direction:column;
    margin-top: 1.2%;

    @media(max-width: 950px) {
        margin-top: 2.2%;
    }
    @media(max-width: 600px) {
        margin-top: 6.2%;
    }
`
export const DivContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 55%;
    margin-bottom: 1.2%;

    @media(max-width: 950px) {
        width: 77%;
        margin-bottom: 2.2%;
    }
    @media(max-width: 600px) {
        width: 90%;
        margin-bottom: 6.2%;
    }
`
export const TitleLi = styled.h1`
    font-weight: 600;
    font-size: 1.05vw;
    color: var(--gray-0);

    @media(max-width: 950px) {
        font-size: 2vw;
    }
    @media(max-width: 600px) {
        font-size: 5vw;
    }
`
export const ButtonAdd = styled.button`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 4%;
        height: 4.3vh;
        background: var(--gray-3);
        border: 0.1vw solid var(--gray-3);
        border-radius: 0.2vw;
        font-size: 0.7vw;
        color: var(--white);

        &:hover {
                background: var(--gray-2);
                border: 0.1vw solid var(--gray-2);  
        }

        @media(max-width: 950px) {
            width: 6%;
            border-radius: 0.5vw;
            font-size: 1.4vw;
        }
        @media(max-width: 600px) {
            width: 12%;
            height: 5vh;
            border-radius: 1vw;
            font-size: 3.7vw;
        }
`
export const DivContentUl = styled.div`
    display:flex;
    flex-direction:column;
    width: 55%;

    @media(max-width: 950px) {
        width: 77%;
    }
    @media(max-width: 600px) {
        width: 90%;
    }
`
export const Ul = styled.ul`
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    width: 100%;
    min-height: 59vh;
    max-height: 59vh;
    background: var(--gray-3);
    border-radius: 4px;
    padding: 2.5% 2.5% 2.5% 2.5%;
    overflow-y: auto;
    gap: 1.1vh;

    @media(max-width: 950px) {
        height: 62vh;
        max-height: 62vh;
    }
    @media(max-width: 600px) {
        height: 62vh;
        max-height: 61vh;
    }
`