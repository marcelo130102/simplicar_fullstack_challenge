import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";


export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    },
  });

  const validateUser = async (email: string, password: string) => {
    await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          navigate(`/schudle/${json.user.id}`)
        });
      }
    });
  };

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" weight={500}>
        Welcome to Mantine, {type} with
      </Text>

      <Divider labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit((values) => validateUser(values.email, values.password))}>
        <Stack>
          {type === "register" && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
          />

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit">{upperFirst(type)}</Button>
        </Group>
      </form>
    </Paper>
  );
}
