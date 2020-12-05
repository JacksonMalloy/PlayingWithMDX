import { graphql, Link } from 'gatsby'
import React from 'react'
import { pExtract } from '../createMediaQuery'
import styled from 'styled-components'

const StyledSidebar = styled.aside`
  padding-top: 3.5rem;

  section {
    position: -webkit-sticky;
    position: sticky;
    top: 1rem;
    display: flex;
    flex-direction: row;
    background-color: var(--primary);
    padding: var(--space);
    border-radius: 0.5rem;
    font-size: 1rem;
    font-family: 'Source Sans Pro Black';
    overflow-y: auto;
  }

  h3 {
    padding: 0;
    margin: 0;
    width: 1000px;
    height: 100%;
    /* top: 150px;
    right: 42%; */
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-90deg);

    height: 300;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding: var(--space);
  }

  a {
    padding: 1rem;
    width: 100%;
    ${pExtract()}
  }

  li {
    padding: 0.4rem;
    grid-column: 2 / 3;
  }
`

export const Sidebar = ({ data }) => {
  let folders = []
  let relativeNode = {}

  data.forEach(({ node }, index, array) => {
    if (!node.relativeDirectory) {
      folders.push(node)
    }

    if (node.relativeDirectory) {
      relativeNode = {
        name: node.relativeDirectory,
        children: [],
      }

      folders.forEach((item, index) => {
        if (item.name === node.relativeDirectory) {
          delete folders[index]
        }
      })

      array.forEach(({ node }) => {
        if (node.relativeDirectory) {
          const directory = {
            name: node.name,
            relativeDirectory: node.relativeDirectory,
            childMdx: node.childMdx,
          }
          relativeNode.children.push(directory)
        }
      })
    }
  })

  folders.push(relativeNode)

  return (
    <StyledSidebar>
      <section>
        <div>
          <Tree items={folders} />
        </div>
        <ul>
          <li>
            <a target="_blank" href="https://twitter.com" rel="noopener noreferrer">
              <svg width="122px" height="100px" viewBox="0 0 256 209" version="1.1" preserveAspectRatio="xMidYMid">
                <title>Twitter</title>

                <g>
                  <path
                    d="M256,25.4500259 C246.580841,29.6272672 236.458451,32.4504868 225.834156,33.7202333 C236.678503,27.2198053 245.00583,16.9269929 248.927437,4.66307685 C238.779765,10.6812633 227.539325,15.0523376 215.57599,17.408298 C205.994835,7.2006971 192.34506,0.822 177.239197,0.822 C148.232605,0.822 124.716076,24.3375931 124.716076,53.3423116 C124.716076,57.4586875 125.181462,61.4673784 126.076652,65.3112644 C82.4258385,63.1210453 43.7257252,42.211429 17.821398,10.4359288 C13.3005011,18.1929938 10.710443,27.2151234 10.710443,36.8402889 C10.710443,55.061526 19.9835254,71.1374907 34.0762135,80.5557137 C25.4660961,80.2832239 17.3681846,77.9207088 10.2862577,73.9869292 C10.2825122,74.2060448 10.2825122,74.4260967 10.2825122,74.647085 C10.2825122,100.094453 28.3867003,121.322443 52.413563,126.14673 C48.0059695,127.347184 43.3661509,127.988612 38.5755734,127.988612 C35.1914554,127.988612 31.9009766,127.659938 28.694773,127.046602 C35.3777973,147.913145 54.7742053,163.097665 77.7569918,163.52185 C59.7820257,177.607983 37.1354036,186.004604 12.5289147,186.004604 C8.28987161,186.004604 4.10888474,185.75646 0,185.271409 C23.2431033,200.173139 50.8507261,208.867532 80.5109185,208.867532 C177.116529,208.867532 229.943977,128.836982 229.943977,59.4326002 C229.943977,57.1552968 229.893412,54.8901664 229.792282,52.6381454 C240.053257,45.2331635 248.958338,35.9825545 256,25.4500259"
                    fill="#55acee"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="twitter.ca" rel="noopener noreferrer">
              <svg width="100" height="100" viewBox="0 0 34 34">
                <title>LinkedIn</title>

                <g>
                  <path
                    d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                    fill="#0a66c2"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="twitter.ca" rel="noopener noreferrer">
              <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 310 310" width="100" height="100">
                <title>Facebook</title>

                <g id="XMLID_834_">
                  <path
                    id="XMLID_835_"
                    fill="#1877f2"
                    d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
		c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
		V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
		C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
		c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                  />
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </section>
    </StyledSidebar>
  )
}

// We add a `depth` property with a default value of 0
// That way we don't have to pass it to the top level of the tree
function Tree({ items, depth = 0 }) {
  if (!items || !items.length) {
    return null
  }

  return items.map((item) => {
    const { relativeDirectory, name, childMdx } = item

    const linkTo = relativeDirectory ? `/${relativeDirectory}/${name}/` : `/${name}`

    return (
      <React.Fragment key={item.name}>
        {/* Multiply the depth by a constant to create consistent spacing */}
        <StyledTreeItem style={{ paddingLeft: depth * 30 }} to={linkTo}>
          {item.name}
        </StyledTreeItem>
        <Tree items={item.children} depth={depth + 1} />
      </React.Fragment>
    )
  })
}

const StyledTreeItem = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`
