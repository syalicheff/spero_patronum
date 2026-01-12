"use client";

import { useState, useEffect } from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Paper,
} from "@mantine/core";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem("speroCounter");
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("speroCounter", count.toString());
  }, [count]);

  const adjustCount = (value: number) => {
    setCount((prev) => prev + value);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: "url(/spero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "auto",
      }}
    >
      <Container
        size="sm"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Stack align="center" gap="xl">
          <Title
            order={1}
            ta="center"
            style={{
              fontSize: "3rem",
              color: "white",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            Spero Patronum Counter
          </Title>

          <Paper
            shadow="lg"
            radius="lg"
            p="xl"
            withBorder
            style={{
              minWidth: "400px",
            }}
          >
            <Stack align="center" gap="xl">
              <Text size="6rem" fw={700} ta="center" c="blue">
                {count}
              </Text>

              <Stack gap="md" style={{ width: "100%" }}>
                <Group justify="center" gap="md">
                  <Button
                    size="lg"
                    color="green"
                    onClick={() => adjustCount(1)}
                    style={{ width: "100px" }}
                  >
                    +1
                  </Button>
                  <Button
                    size="lg"
                    color="green"
                    onClick={() => adjustCount(5)}
                    style={{ width: "100px" }}
                  >
                    +5
                  </Button>
                  <Button
                    size="lg"
                    color="green"
                    onClick={() => adjustCount(10)}
                    style={{ width: "100px" }}
                  >
                    +10
                  </Button>
                </Group>

                <Group justify="center" gap="md">
                  <Button
                    size="lg"
                    color="red"
                    onClick={() => adjustCount(-1)}
                    style={{ width: "100px" }}
                  >
                    -1
                  </Button>
                  <Button
                    size="lg"
                    color="red"
                    onClick={() => adjustCount(-5)}
                    style={{ width: "100px" }}
                  >
                    -5
                  </Button>
                  <Button
                    size="lg"
                    color="red"
                    onClick={() => adjustCount(-10)}
                    style={{ width: "100px" }}
                  >
                    -10
                  </Button>
                </Group>
              </Stack>

              <Button
                variant="outline"
                color="gray"
                onClick={() => setCount(0)}
                fullWidth
              >
                Reset
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </div>
  );
}
