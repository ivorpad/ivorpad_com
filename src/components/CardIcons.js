import React from 'react'
import ReactTooltip from 'react-tooltip'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faExternalLinkAlt, faGithub)

export default ({post}) => {
  return <div className="card__icons">
      {post.gitRepoUrl ? <a href={`${post.gitRepoUrl}`} data-tip={post.isInPrivateRepo ? `Private Repository` : ``} title="Github">
          <FontAwesomeIcon icon={['fab', 'github']} />
          {post.isInPrivateRepo ? <ReactTooltip className="tooltip"/> : null}
        </a> : null}

    {post.externalLink ? <a href={`${post.externalLink}`} target="_blank" rel="noopener noreferrer" title="Go to external link">
          <FontAwesomeIcon icon="external-link-alt" />
        </a> : null}
    </div>
}
