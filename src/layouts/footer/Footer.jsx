import React from 'react';
import {Container, Grid, Header, List, Segment} from "semantic-ui-react";

export default function Footer() {
    return (
        <div>
            <Segment inverted vertical style={{position: 'fixed', bottom: '0',width:'100%'}}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Header' />
                                <List link inverted>
                                    <List.Item as='a'>List Item 1</List.Item>
                                    <List.Item as='a'>List Item 2</List.Item>
                                    <List.Item as='a'>List Item 3</List.Item>
                                    <List.Item as='a'>List Item 4</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Header' />
                                <List link inverted>
                                    <List.Item as='a'>List Item 1</List.Item>
                                    <List.Item as='a'>List Item 2</List.Item>
                                    <List.Item as='a'>List Item 3</List.Item>
                                    <List.Item as='a'>List Item 4</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header as='h4' inverted>
                                    Footer Header
                                </Header>
                                <p>
                                    Footer text
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
    );
};
