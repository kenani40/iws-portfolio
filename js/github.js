
const REPOS_CONTAINER = document.getElementById('github-repos');
const GITHUB_USERNAME = 'kenani40';
const REPO_COUNT = 3;

function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
  });
}
function renderRepoCard(repo) {
  const description = repo.description
    ? repo.description
    : 'No description provided for this repository yet.';

  const language = repo.language
    ? `<span class="tag">${repo.language}</span>`
    : '';

  return `
    <article class="project-card">
      <h4>${repo.name}</h4>
      <p>${description}</p>
      <div class="tags">
        ${language}
        <span class="tag">Updated ${formatDate(repo.updated_at)}</span>
      </div>
      <a href="${repo.html_url}" class="view-project" target="_blank" rel="noopener">
        View on GitHub →
      </a>
    </article>
  `;
}
async function loadRepos() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);

    if (!res.ok) {
      throw new Error(`GitHub API responded with status ${res.status}`);
    }

    const repos = await res.json();
    console.log('Fetched GitHub repos:', repos);
    const topRepos = repos
      .slice() // getting a shallow copy of the array
      .sort(( a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, REPO_COUNT);

    if (topRepos.length === 0) {
      REPOS_CONTAINER.innerHTML = '<p>No public repositories found.</p>';
      return;
    }
    REPOS_CONTAINER.innerHTML = topRepos.map(renderRepoCard).join('');
  } catch (error) {
    console.error('Failed to load GitHub repos:', error);
    REPOS_CONTAINER.innerHTML = `
      <p class="error-message" role="alert">
        Couldn't load live GitHub activity right now, you can view the
        full profile directly at
        <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" rel="noopener">
          github.com/${GITHUB_USERNAME}
        </a>.
      </p>
    `;
  }
}

loadRepos();