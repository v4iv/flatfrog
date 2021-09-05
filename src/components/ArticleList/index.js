import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { get } from 'lodash'
import ProgressiveImageContainer from '../ProgressiveImageContainer'
import { Box, Column, Text } from "gestalt"

const ArticleList = (props) => {
  const { posts } = props

  return <>
    {posts
      .filter(post => post.node.frontmatter.templateKey === 'article-page')
      .map(({ node: post }) => {
        return (
          <Box marginBottom={3} padding={4} display="flex" direction="row" alignItems="start" justifyContent="center"
               borderStyle="sm" rounding={2} wrap>
            <Column span={6} mdSpan={9}>
              <Box padding={2}>
                <Text weight="bold">{post.frontmatter.title}</Text>

                <Box alignItems="center" display="flex" paddingY={2}>
                  <Box>
                    <Text size='md'>{get(post, ['frontmatter', 'author'], '')}</Text>
                  </Box>

                  <Box paddingX={2}>
                    <Text>{get(post, ['frontmatter', 'date'], '')}</Text>
                  </Box>
                </Box>

                <Text size='sm'>{post.excerpt}</Text>
              </Box>
            </Column>

            <Column span={6} mdSpan={3}>
              <Box padding={1} display='flex' justifyContent='end' alignItems='center'>
                <Box
                  color="darkGray"
                  height={150}
                  width={150}
                  alignItems='center'
                >
                  {/* Image*/}
                </Box>
              </Box>
            </Column>
          </Box>
        )
      })}
  </>
}

ArticleList.propTypes = {
  posts: PropTypes.array,
}

export default ArticleList
