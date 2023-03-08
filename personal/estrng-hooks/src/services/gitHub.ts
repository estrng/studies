

/**
 * Pode-se usar um services como esse para fazer requisições a uma API externa,
 * e tratar os dados de forma mais organizada.
 * 
 */
export function useGitHub() {
  async function callGitHubData(user: string) {
    return fetch(`https://api.github.com/users/${user}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    }).then(async response => {
      if (response.ok) return await response.json()
      else return Promise.reject(await response.json())      
    })
  }

  async function callGitHubRepos(user: string) {
    return fetch(`https://api.github.com/users/${user}/repos`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    }).then(async response => {
      if (response.ok) return await response.json()
      else return Promise.reject(await response.json())
    })
  }

  return {
    callGitHubData,
  }
}