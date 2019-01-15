
import {Http} from '../../utils'


// Loads projects
export const LoadProjectIfNeeded = (state, id) => {
  
  console.log('LOAD PROJECT IF NEEDED')
  
  const project = state.projects && state.projects[id] && state.projects[id]

  if (!project) {

    return [
      {
        ...state,
        projects: {
          ...state.projects,
          [id]: {
            loading: true
          }
        }
      },
      Http.fetch({
        url: `//${window.location.hostname}:5984/hyperapp-projects/${id}`,
        action: HandleFetchResponse,
        error: [HandleFetchError, id]
      })
    ]

  }
}



// Adds projects to the list
export const HandleFetchResponse = (state, project) => ({
  ...state,
  projects: {
    ...state.projects,
    [project._id]: project
  }
})

// Error handling
const HandleFetchError = (state, id, data) => ({
  ...state,
  projects: {
    ...state.projects,
    [id]: {
      error: true
    }
  }
})
