import { Grid, Paper, ScrollArea } from '@mantine/core';
import IncomeLineGraph from './IncomeLineGraph';
import IncomeStackBar from './IncomeStackBar';
import PayTimeline from './Timeline';
import CostStack from './CostStack';
import RingGraph from './RingGraph';
import Inputter from './Inputter';

export default function NonessntialGraphs() {
    return (
        <Grid gutter="lg">
            <Grid.Col span={4}>
                <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4]
                })}>
                    <IncomeLineGraph />
                </Paper>
            </Grid.Col>
            <Grid.Col span={5}>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4]
                })}>
                    <IncomeStackBar />
                </Paper>
            </Grid.Col>
            <Grid.Col span={3}>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4]
                })}>
                    <PayTimeline />
                </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4]
                })}>
                    <ScrollArea style={{height: 200}}>
                        <CostStack />
                    </ScrollArea>
                </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4]
                })}>
                    <RingGraph />
                </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4]
                })}>
                    <Inputter />
                </Paper>
            </Grid.Col>
        </Grid>
    )
}