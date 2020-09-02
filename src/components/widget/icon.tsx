import React from 'react'

export default function WidgetIcon({ open }: { open: boolean }) {
  if (!open) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 32 32"
      >
        <circle cx="7.5" cy="24.5" r="7.5" fill="#FA759E"></circle>
        <circle cx="24.5" cy="7.5" r="7.5" fill="#164176"></circle>
      </svg>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="102"
      height="37"
      fill="none"
      viewBox="0 0 102 37"
    >
      <path
        fill="#FA759E"
        d="M9.343 10.494c1.982 0 3.594-1.6 3.594-3.566 0-1.965-1.613-3.564-3.594-3.564-1.982 0-3.595 1.6-3.595 3.564 0 1.967 1.613 3.566 3.595 3.566z"
      ></path>
      <path
        fill="#164176"
        d="M18.142 3.832c0 2.114 1.733 3.833 3.864 3.833 2.13 0 3.863-1.72 3.863-3.833C25.87 1.72 24.136 0 22.006 0c-2.131 0-3.864 1.72-3.864 3.832z"
      ></path>
      <path
        fill="#164176"
        stroke="#164176"
        d="M36.222 25.406c-.398-.336-.861-.405-1.443-.308-.035-.56-.21-1.084-.538-1.488-.453-.558-1.134-.862-1.925-.862h-.037c-.384.005-.806.093-1.26.22v-8.024c0-2.363-1.939-4.286-4.32-4.286h-9.383a4.325 4.325 0 00-3.964 2.589H5.044c-2.214 0-4.014 1.786-4.014 3.981-.04 8.778-.04 13.865 0 15.26.018.649 1.46 1.876 1.96 2.006C5.501 35.152 9.69 36 14.6 36c6.435-.002 14.109-1.457 20.849-6.705.152-.104 1.484-1.04 1.549-2.28.022-.418-.096-1.037-.776-1.61zm-3.929-1.398h.023c.408 0 .72.132.932.392.215.266.308.647.276 1.059-.414.156-.875.347-1.395.564-1.691.703-4.097 1.704-7.46 2.522.07-.206.105-.405.117-.588.04-.583-.018-1.098-.163-1.548 1.95-.478 3.538-1.067 4.825-1.56 1.222-.465 2.186-.833 2.845-.84zm-14.977-12.09h9.382c1.682 0 3.05 1.357 3.05 3.026v8.445c-.244.09-.49.183-.754.285-.5.19-1.064.398-1.66.608v-8.705a.634.634 0 00-.636-.63.633.633 0 00-.636.63v9.122c-.663.205-1.362.407-2.133.583-.872-.83-2.057-.78-2.085-.78-1.656.019-2.907-.015-3.891-.086v-8.838a.634.634 0 00-.636-.631.633.633 0 00-.636.63v8.705c-1.242-.183-1.865-.458-2.415-.769v-8.57c0-1.668 1.367-3.025 3.05-3.025zm-15.015 5.31c0-1.501 1.23-2.722 2.743-2.722h7.996c-.015.146-.045.288-.045.438v7.873c-1.135-.527-2.963-1.02-7.315-1.225v-3.783a.633.633 0 00-.635-.63.633.633 0 00-.636.63v3.734c-.177-.005-.341-.014-.525-.017a2.96 2.96 0 00-1.583.401v-4.7zm32.397 11.05C23.23 37.203 8.932 34.745 3.315 33.273a1.775 1.775 0 01-1.332-1.727l.034-6.994c.002-.481.196-.931.546-1.267a1.782 1.782 0 011.288-.5c6.981.176 8.291.947 9.448 1.628 1.295.763 2.424 1.43 8.581 1.348.009-.002.73-.024 1.201.455.342.349.49.906.44 1.655-.013.185-.052.739-1.159 1.175-.01.003-.017.01-.026.013-.005.002-.01 0-.014.002-1.178.451-3.77.827-9.449.071a.635.635 0 00-.714.54.63.63 0 00.546.709c2.217.296 4.137.444 5.749.444 1.816 0 3.236-.192 4.257-.566h.005c4.67-.896 7.82-2.206 9.907-3.075 1.292-.535 2.508-1.042 2.776-.816.309.26.337.453.33.58-.025.487-.683 1.088-1.03 1.328z"
      ></path>
      <path
        fill="#164176"
        d="M46.967 10.868v-8.51h.03l1.892 8.51h1.669l1.892-8.51h.03v8.51h1.967V.21h-3.174l-1.535 7.524h-.03L48.189.21H45v10.66h1.967zm12.412.165c.805 0 1.446-.13 1.922-.389a2.616 2.616 0 001.096-1.12c.253-.487.417-1.07.491-1.746.075-.677.112-1.423.112-2.24 0-.805-.037-1.55-.112-2.231-.074-.682-.238-1.267-.491-1.754A2.755 2.755 0 0061.3.41C60.825.137 60.184 0 59.38 0c-.804 0-1.445.137-1.922.41a2.755 2.755 0 00-1.095 1.143c-.254.487-.417 1.072-.492 1.754a20.626 20.626 0 00-.112 2.232c0 .816.038 1.562.112 2.24.075.676.239 1.258.492 1.746.253.487.618.86 1.095 1.12.477.258 1.117.388 1.922.388zm0-1.538c-.318 0-.573-.072-.767-.217-.194-.144-.343-.373-.447-.686-.105-.314-.174-.722-.209-1.224a27.086 27.086 0 01-.052-1.83c0-.716.017-1.323.052-1.82.035-.498.104-.906.209-1.225.104-.318.253-.55.447-.694.194-.144.45-.217.767-.217.318 0 .574.073.768.217.193.144.342.376.447.694.104.319.173.727.208 1.224.035.498.052 1.105.052 1.822 0 .716-.017 1.326-.052 1.829-.035.502-.104.91-.208 1.224-.105.313-.254.542-.447.686-.194.145-.45.217-.768.217zm7.033 1.373V6.36h1.148c.447 0 .765.12.953.358.19.239.293.567.313.985l.06 2.046c.01.209.03.41.06.604s.099.366.208.515h2.325v-.09c-.2-.109-.328-.313-.388-.611-.04-.299-.07-.732-.09-1.3-.01-.288-.02-.549-.03-.783-.009-.234-.024-.45-.044-.65-.06-.596-.213-1.03-.462-1.298-.248-.269-.64-.443-1.177-.523v-.03c.606-.129 1.053-.42 1.341-.873.288-.453.432-1.037.432-1.754 0-.926-.248-1.615-.745-2.068C69.82.435 69.124.21 68.23.21h-3.963v10.66h2.145zm.894-6.001h-.894V1.79h1.014c.993 0 1.49.493 1.49 1.478 0 .578-.14.988-.418 1.232-.278.244-.675.366-1.192.366zm11.34 6.001V9.107h-3.949V6.24h3.576V4.48h-3.576V1.97h3.8V.209H72.55v10.66h6.095z"
      ></path>
      <path
        fill="#FA759E"
        d="M47.15 23.482V18.83h2.507v4.652h2.15V13.005h-2.15v4.005H47.15v-4.006H45v10.478h2.15zm9.418.161c.438 0 .86-.044 1.269-.132a2.6 2.6 0 001.09-.514c.318-.254.572-.599.76-1.034.19-.435.284-.986.284-1.65v-7.308h-2.149v7.307c0 .264-.017.506-.052.726-.035.22-.1.411-.194.573a1.046 1.046 0 01-.38.381c-.16.093-.37.14-.628.14-.249 0-.455-.047-.62-.14a1.03 1.03 0 01-.387-.381 1.626 1.626 0 01-.194-.573 4.655 4.655 0 01-.053-.726v-7.308h-2.15v7.308c0 .704.095 1.277.285 1.717.189.44.442.78.76 1.02a2.6 2.6 0 001.09.477c.408.078.831.117 1.27.117zm6.777-.161v-8.364h.03l1.895 8.364h1.672l1.896-8.364h.03v8.364h1.97V13.005h-3.18L66.122 20.4h-.03l-1.522-7.395h-3.195v10.477h1.97zm10.523 0l.493-2.216h2.836l.492 2.216h2.24l-2.822-10.477H74.45l-2.82 10.477h2.238zm2.956-3.948h-2.09l1.03-4.71h.03l1.03 4.71zm5.821 3.948v-7.337h.03l2.627 7.337h2.448V13.005h-1.97v7.175h-.03l-2.597-7.175h-2.478v10.477h1.97z"
      ></path>
      <path
        fill="#164176"
        d="M47.532 36.254V25.615h-2.136v10.639h2.136zm3.547 0v-7.45h.03l2.61 7.45h2.434V25.615h-1.959v7.286h-.03l-2.58-7.286H49.12v10.639h1.959zm10.445 0v-8.88h2.315v-1.759h-6.766v1.758h2.315v8.88h2.136zm9.303 0v-1.759h-3.932v-2.86h3.561v-1.759h-3.56v-2.503h3.783v-1.758h-5.92v10.639h6.068zm3.205 0v-4.5h1.142c.445 0 .762.119.95.357.188.239.292.567.312.984l.059 2.041c.01.209.03.41.06.603.029.194.098.366.207.515h2.314v-.09c-.197-.11-.326-.313-.385-.61-.04-.299-.07-.73-.09-1.297l-.029-.782c-.01-.234-.025-.45-.044-.648-.06-.596-.213-1.028-.46-1.297-.248-.268-.638-.442-1.173-.521v-.03c.604-.13 1.049-.42 1.336-.872.287-.452.43-1.035.43-1.75 0-.924-.247-1.612-.742-2.064-.494-.452-1.187-.678-2.077-.678h-3.947v10.639h2.137zm.89-5.99h-.89v-3.07h1.009c.989 0 1.484.492 1.484 1.476 0 .576-.139.985-.416 1.229-.277.243-.673.365-1.187.365zm7.181 5.99v-7.45h.03l2.611 7.45h2.434V25.615h-1.959v7.286h-.03l-2.581-7.286h-2.463v10.639h1.958zm12.627 0v-1.759h-3.932v-2.86h3.56v-1.759h-3.56v-2.503h3.783v-1.758h-5.92v10.639h6.069zm4.956 0v-8.88H102v-1.759h-6.766v1.758h2.315v8.88h2.136z"
      ></path>
    </svg>
  )
}
