# Stava

---

## How to set up the program

Clone the repo. You can do this by writing `git clone ...`. Replace the dots with the link you get by pressing the `clone` button at the top of the page.

Once you've cloned the repo, you may write `npm i` in the stava-folder. After that, write `cd server` and write the `npm i` again. Then write `cd ../client`, and `npm i --force`.

### How to run the program

After installing in all the folders, you may start to run the application locally.

Have two terminals ready. With one of them, write `cd server`, and once there, write the command `npm start`.

With the other terminal, write `cd client`, and once there write `npm start` as well. This should start a localhost, and redirect you to a new page in your favorite browser.

## How about a shortcut?

If you want an easier time starting the application, you can simply write `npm run build-server` and `npm run build-client`. Then, you must create a new terminal. From one of the terminals you must write `npm run start-client` and the other, write `npm run start-server`.
