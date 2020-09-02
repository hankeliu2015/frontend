import React from 'react'

export default function Logo({ againstHero }: { againstHero: boolean }) {
  return (
    <svg
      className={`header-logo ${
        againstHero ? 'against-hero' : 'against-white-bg'
      }`}
      width="138px"
      height="49px"
      viewBox="0 0 138 49"
    >
      <g fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
        <path
          d="M3.1 14.506V3.148h.04l2.526 11.358h2.228L10.42 3.148h.04v11.358h2.625V.28H8.849L6.8 10.322h-.04L4.732.279H.475v14.227h2.626zm16.568.22c1.074 0 1.929-.173 2.565-.519a3.492 3.492 0 001.462-1.494c.338-.65.557-1.428.657-2.331.099-.904.149-1.9.149-2.99 0-1.075-.05-2.068-.15-2.978-.099-.91-.318-1.69-.656-2.342A3.678 3.678 0 0022.233.548C21.597.183 20.742 0 19.668 0c-1.074 0-1.93.183-2.566.548a3.678 3.678 0 00-1.462 1.524c-.338.651-.556 1.432-.656 2.342-.1.91-.149 1.903-.149 2.979 0 1.089.05 2.085.15 2.989.099.903.317 1.68.655 2.331.339.65.826 1.15 1.462 1.494.637.346 1.492.519 2.566.519zm0-2.053c-.424 0-.766-.096-1.024-.289-.259-.192-.458-.498-.597-.916-.14-.419-.232-.963-.278-1.634-.047-.671-.07-1.485-.07-2.441 0-.957.023-1.767.07-2.431.046-.665.139-1.21.278-1.634.14-.425.338-.734.597-.927.258-.192.6-.289 1.024-.289.424 0 .766.097 1.024.29.259.192.458.5.597.926.139.425.232.97.278 1.634.047.664.07 1.474.07 2.43 0 .957-.023 1.77-.07 2.442-.046.67-.139 1.215-.278 1.634-.14.418-.338.724-.597.916-.258.193-.6.29-1.024.29zm9.387 1.833V8.49h1.532c.596 0 1.02.159 1.272.478.252.319.392.757.418 1.315l.08 2.73c.013.279.04.548.08.807.039.259.132.488.278.687h3.102v-.12c-.265-.145-.437-.418-.517-.816a19.247 19.247 0 01-.12-1.734c-.012-.385-.026-.734-.039-1.046a15.304 15.304 0 00-.06-.867c-.08-.797-.285-1.375-.616-1.733-.332-.359-.855-.591-1.571-.698v-.04c.808-.172 1.405-.56 1.79-1.165.384-.605.576-1.385.576-2.342 0-1.235-.331-2.155-.994-2.76C33.603.582 32.675.28 31.482.28h-5.29v14.227h2.863zm1.194-8.01h-1.194V2.391h1.353c1.326 0 1.988.658 1.988 1.973 0 .77-.185 1.318-.556 1.644-.372.325-.902.488-1.591.488zm15.135 8.01v-2.35h-5.27V8.328h4.772V5.978h-4.773V2.63h5.072V.28h-7.936v14.227h8.135z"
          className="more"
          transform="translate(60.48)"
        />
        <path
          d="M3.344 31.342v-6.209h3.348v6.209H9.56V17.358H6.692v5.346H3.344v-5.346H.475v13.984h2.87zm12.572.215c.584 0 1.149-.059 1.693-.176a3.47 3.47 0 001.455-.686c.425-.339.763-.8 1.016-1.38.252-.581.378-1.316.378-2.204v-9.753H17.59v9.753c0 .353-.023.676-.07.97a2.17 2.17 0 01-.258.764 1.396 1.396 0 01-.508.509c-.213.124-.492.186-.837.186-.332 0-.608-.062-.827-.186a1.374 1.374 0 01-.518-.51 2.17 2.17 0 01-.259-.763 6.224 6.224 0 01-.07-.97v-9.753h-2.869v9.753c0 .94.127 1.704.379 2.292.252.587.591 1.041 1.016 1.361.425.32.91.532 1.454.637.545.104 1.11.156 1.694.156zm9.045-.215V20.178h.04l2.53 11.164h2.231l2.53-11.164h.04v11.164h2.63V17.358H30.72l-2.052 9.87h-.04l-2.032-9.87H22.33v13.984h2.63zm14.046 0l.657-2.958h3.786l.657 2.958h2.989L43.33 17.358h-3.546l-3.766 13.984h2.989zm3.945-5.269h-2.79l1.375-6.287h.04l1.375 6.287zm7.77 5.269v-9.793h.04l3.506 9.793h3.267V17.358h-2.63v9.577h-.04L51.4 17.358h-3.307v13.984h2.63z"
          className="human"
          transform="translate(60.48)"
        />
        <path
          d="M3.856 48.389v-14.2H1.004v14.2h2.852zm4.733 0v-9.944h.04l3.485 9.944h3.248v-14.2h-2.615v9.725h-.04L9.263 34.19H5.975v14.2h2.614zm13.942 0V36.536h3.089v-2.347h-9.03v2.347h3.089v11.853h2.852zm12.416 0v-2.347H29.7v-3.818h4.753v-2.347H29.7v-3.341h5.05v-2.347h-7.901v14.2h8.1zm4.278 0v-6.006h1.525c.594 0 1.017.159 1.267.477.251.318.39.756.416 1.313l.08 2.724c.013.279.04.547.079.806.04.258.132.487.277.686h3.09v-.12c-.265-.145-.436-.417-.516-.815a19.254 19.254 0 01-.118-1.73 131.29 131.29 0 00-.04-1.044c-.013-.312-.033-.6-.06-.865-.079-.796-.283-1.372-.613-1.73-.33-.358-.852-.59-1.565-.697v-.04c.806-.172 1.4-.56 1.783-1.163.382-.603.574-1.382.574-2.336 0-1.234-.33-2.152-.99-2.755-.66-.603-1.585-.905-2.773-.905h-5.268v14.2h2.852zm1.188-7.995h-1.188v-4.097h1.347c1.32 0 1.98.657 1.98 1.97 0 .768-.185 1.315-.554 1.64-.37.325-.898.487-1.585.487zm9.585 7.995v-9.944h.04l3.485 9.944h3.248v-14.2h-2.614v9.725h-.04l-3.445-9.725h-3.288v14.2h2.614zm16.853 0v-2.347h-5.248v-3.818h4.753v-2.347h-4.753v-3.341h5.05v-2.347h-7.901v14.2h8.1zm6.615 0V36.536h3.09v-2.347h-9.031v2.347h3.089v11.853h2.852z"
          className="internet"
          transform="translate(60.48)"
        />
        <g>
          <path
            d="M11.575 14.167a4.74 4.74 0 004.735-4.736 4.74 4.74 0 00-4.735-4.733A4.74 4.74 0 006.841 9.43a4.74 4.74 0 004.734 4.736z"
            className="left-head"
          />
          <path
            d="M23.167 5.32a5.095 5.095 0 005.09 5.09 5.095 5.095 0 005.089-5.09 5.095 5.095 0 00-5.09-5.09 5.095 5.095 0 00-5.09 5.09z"
            className="right-head"
          />
          <path
            d="M46.982 33.97c-.524-.446-1.135-.538-1.9-.409-.047-.744-.278-1.44-.71-1.976-.596-.74-1.493-1.145-2.535-1.145h-.05c-.504.007-1.06.124-1.658.293V20.077a5.698 5.698 0 00-5.692-5.692H22.078a5.696 5.696 0 00-5.222 3.437H5.912A5.294 5.294 0 00.624 23.11c-.051 11.657-.051 18.412 0 20.267.024.86 1.924 2.49 2.583 2.662 3.308.874 8.824 2 15.293 2 8.478-.002 18.585-1.935 27.464-8.905.2-.137 1.955-1.38 2.04-3.026.029-.556-.126-1.378-1.022-2.138zm-5.175-1.856h.03c.537 0 .95.175 1.227.52.283.353.407.86.364 1.406a60.43 60.43 0 00-1.837.75c-2.228.933-5.397 2.263-9.828 3.35.093-.275.14-.539.155-.782.052-.774-.024-1.458-.215-2.056 2.57-.635 4.661-1.417 6.356-2.07 1.61-.62 2.88-1.108 3.748-1.118zM22.078 16.058h12.359a4.021 4.021 0 014.017 4.018v11.216c-.32.12-.645.243-.993.377-.66.253-1.402.53-2.187.808v-11.56a.838.838 0 00-1.675 0V33.03c-.874.272-1.795.54-2.81.774-1.15-1.102-2.709-1.034-2.746-1.037-2.182.027-3.83-.018-5.126-.112V20.918a.838.838 0 00-1.675 0v11.56c-1.636-.243-2.457-.61-3.18-1.022v-11.38a4.02 4.02 0 014.016-4.018zM2.3 23.108a3.617 3.617 0 013.613-3.613h10.533c-.02.194-.059.383-.059.58v10.456c-1.495-.699-3.903-1.354-9.635-1.626V23.88a.838.838 0 00-1.675 0v4.96c-.233-.008-.45-.02-.691-.024a3.875 3.875 0 00-2.086.533V23.11zm42.676 14.675c-15.107 11.855-33.941 8.59-41.34 6.636a2.355 2.355 0 01-1.755-2.293l.045-9.288c.003-.64.258-1.238.719-1.684a2.338 2.338 0 011.697-.663c9.196.234 10.922 1.258 12.446 2.162 1.705 1.013 3.192 1.899 11.303 1.79.012-.003.961-.032 1.582.604.45.463.645 1.204.578 2.198-.016.245-.066.982-1.525 1.56-.014.005-.023.014-.034.018-.007.003-.013 0-.019.003-1.552.599-4.966 1.098-12.446.094a.836.836 0 10-.222 1.658c2.921.394 5.45.59 7.573.59 2.393 0 4.262-.255 5.608-.751h.006c6.151-1.19 10.302-2.93 13.05-4.084 1.702-.711 3.304-1.384 3.657-1.084.407.344.444.602.434.77-.032.647-.9 1.445-1.357 1.764z"
            className="bodies"
          />
        </g>
      </g>
    </svg>
  )
}
