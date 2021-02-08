# How to contribute to Diversity in Tech Ireland

* If you're unable to find an open issue addressing the problem, open a new one. 
Be sure to include a title and clear description, as much relevant information as possible.

## Updating list of events
### Create a github pull request and the file to update is in **src/_data/events/year/**
#### Existing file: 
- File name format: *Month*_*YYYY*.yaml
- If this is a new event or not: **new:** is either *true* or *false* 
- If this is a recurring event or not: **recurring:** is either *true* or *false* 
- The date you added the event to the list: **date_added:** in the format YYYY-MM-DD
- Event start date and time: **start_datetime:* in the format YYYY-MM-DDTHH:MM:SSZ
- Event end date and time: **end_datetime:* in the format YYYY-MM-DDTHH:MM:SSZ

#### Creating a new file
- File name format: *Month*_*YYYY*.yaml
- Check existing yaml file on what data is required


## Updating list of conferences entries
### Create a github pull request and the file to update is in **src/_data/events/year/**
#### Existing file: 
- File name format: conferences_*YYYY*.yaml
- If this is a new event or not: **new:** is either *true* or *false* 
- If this is a recurring event or not: **recurring:** is either *true* or *false* 
- The date you added the event to the list: **date_added:** in the format YYYY-MM-DD
- Event start date and time: **start_datetime:* in the format YYYY-MM-DDTHH:MM:SSZ
- Event end date and time: **end_datetime:* in the format YYYY-MM-DDTHH:MM:SSZ

#### Creating a new file
- File name format: conferences_*YYYY*.yaml
- Check existing yaml file on what data is required

## Updating list of Diversity in Tech groups 
### Create a github pull request and the file to update is **src/_data/diversityGroup.yaml**
- **status:** is either *new* or *active* or *retired*
  - **new**: New group
  - **active**: After removing *new*, it becomes active group
  - **retired**: Groups not around or not active anymore
- **type:** is either *all* or *student* or *youth*
  - **all**: General diversity group
  - **student**: College student clubs and socs
  - **youth**: Groups for youths under 18 years old

### 🌈 Contributor list
Of course we would love to have your name in the list of contributors, please add your name to **cotributorsList.yaml**.

# Did you fix whitespace, format code, or make a purely cosmetic changes?
Changes that are cosmetic in nature and do not add anything substantial to the stability, functionality of the site. Time is required to review each PRs, 
it creates too much noise and pollutes the git history.
We appreciate that you want to contribute to the listings. We ask that you refrain from sending these types of changes, and that we will not be 
accepting any PRs that are purely cosmetic. If you have any questions you can email us at irishgeeks@eventgeek.ie.

---

Note: Guidelines are based on https://docs.github.com/en/github/building-a-strong-community/setting-guidelines-for-repository-contributors

Thanks a mill,

/// Vicky 😺😺😺
