# How to run

1. Clone this project.

```sh

git clone https://github.com/iivvaannxx/conditional-bug

```

2. Ensure Docker is installed and the file `run.sh` has execution permissions.

```sh

docker --version
chmod +x ./run.sh

```

3. Execute the script `run.sh` which will create the docker image `conditional-bug` and start it on port 80.

```sh

./run.sh

... Script executes ...

App running on port 80.

```

# The problem

You will see a simple form with an 'Advanced Options' section and a button to open it. By default it's closed, if you open it you will see how the wrapper `<div>` element gets added but the children passed to the island do not get rendered.

If you go to the `<If>` component at `source/common/components/if.tsx` and change the condition `condition === true` to `condition === false` the children will get rendered by default (because the new `default` is inverted and the section is opened).
