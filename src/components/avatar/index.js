import './avatar.css'


/**
 * @typedef {Object} AvatarProps
 * @property {string} AvatarProps.link - some description here
 * @property {string} AvatarProps.imgSrc - some description here
 * @property {string} AvatarProps.descricao - some description here
 * 
 * @param {AvatarProps} props
 */
export function avatar({link, imgSrc, descricao}) {
  return `
    <a class="avatar" href="${link}" target="_blank">
      <img src="${imgSrc}" class="avatar" alt="${descricao}" />
    </a>
  `
}