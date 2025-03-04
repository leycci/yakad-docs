import Symbol from "@yakad/symbols";
import {
    Button,
    Container,
    Row,
    Stack,
    Hr,
    Card,
    Table,
    Tr,
    Th,
    Td,
    Thead,
    Tbody,
    Spacer,
    Loading,
} from "@yakad/ui";

export default function Page() {
    return (
        <>
            <Container size="md">
                <h1>Buttons</h1>
                <Hr />
                <p>
                    Buttons allow users to take actions, and make choices, with
                    a single tap.
                </p>
                <Card>
                    <Row>
                        <span>
                            <code>{'import { Button } from "@yakad/ui"'}</code>
                            <br />
                            <br />
                            <code>{"<Button>Button</Button>"}</code>
                        </span>
                        <Spacer />
                        <Button icon={<Symbol icon="content_copy" />}></Button>
                    </Row>
                </Card>

                <h2>Properties</h2>
                <p>Properties that are accepted as attributes:</p>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Property</Th>
                            <Th>Value</Th>
                            <Th>Defult</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Size</Td>
                            <Td>small | medium | large</Td>
                            <Td>medium</Td>
                        </Tr>
                        <Tr>
                            <Td>Variant</Td>
                            <Td>
                                text | outlined | filled | filledtonal | tonal |
                                elevated | link | fab
                            </Td>
                            <Td>text</Td>
                        </Tr>
                        <Tr>
                            <Td>Borderstyle</Td>
                            <Td>none | semi | squircle | rounded </Td>
                            <Td>rounded</Td>
                        </Tr>
                    </Tbody>
                    <Tbody>
                        <Tr>
                            <Td>Iconposition</Td>
                            <Td> start | end </Td>
                            <Td>start</Td>
                        </Tr>
                    </Tbody>
                    <Tbody>
                        <Tr>
                            <Td>Loadingvariant</Td>
                            <Td> scaleOut | dots | spinner </Td>
                            <Td>Undefined</Td>
                        </Tr>
                    </Tbody>
                </Table>
                <p>
                    Also, the Button accepts the default attributes of a Button
                    elemnt.
                </p>
                <h3>Size:</h3>
                <p>you can use different size button.</p>
                <Card
                    align="center"
                    style={{
                        maxWidth: "60rem",
                    }}
                >
                    <Row
                        style={{
                            justifyContent: "center",
                        }}
                    >
                        <Button variant="filledtonal" size="small">
                            SMALL
                        </Button>
                        <Button variant="filledtonal" size="medium">
                            MEDIUM
                        </Button>
                        <Button variant="filledtonal" size="large">
                            LARGE
                        </Button>
                    </Row>
                </Card>
                <h3>Variant:</h3>
                <p>
                    Here you can see different models and colors of buttons,
                    which can be called with the variant property.
                </p>
                <Card
                    align="center"
                    style={{ maxWidth: "60rem", padding: "50px" }}
                >
                    <Row
                        style={{
                            justifyContent: "center",
                            padding: "20px",
                        }}
                    >
                        <Button variant="elevated">ELEVATED</Button>
                        <Button variant="fab">FAB</Button>
                        <Button variant="filled">FILLED</Button>
                        <Button variant="filledtonal">FILLEDTONAL</Button>
                    </Row>

                    <Row
                        style={{
                            justifyContent: "center",
                        }}
                    >
                        <Button variant="link">LINK</Button>
                        <Button variant="outlined">OUTLINEDE</Button>
                        <Button variant="text">TEXT</Button>
                        <Button variant="tonal">TONAL</Button>
                    </Row>
                </Card>

                <h3>Borderstyle:</h3>
                <p>
                    With this feature, you can easily and beautifully change the
                    style of the button borders.
                </p>

                <Card
                    align="center"
                    style={{ maxWidth: "60rem", padding: "50px" }}
                >
                    <Row
                        style={{
                            justifyContent: "center",
                        }}
                    >
                        <Button variant="filledtonal" borderstyle="none">
                            NONE
                        </Button>
                        <Button variant="filledtonal" borderstyle="rounded">
                            ROUNDED
                        </Button>
                        <Button variant="filledtonal" borderstyle="semi">
                            SEMI
                        </Button>
                        <Button variant="filledtonal" borderstyle="squircle">
                            squircle
                        </Button>
                    </Row>
                </Card>

                <h3>Iconposition:</h3>
                <p>
                    With this property, you can easily add different icons on
                    your buttons.
                </p>
                <Card
                    align="center"
                    style={{ maxWidth: "60rem", padding: "50px" }}
                >
                    <Row
                        style={{
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            variant="outlined"
                            icon={<Symbol icon="search" />}
                        >
                            Search
                        </Button>
                        <Button
                            iconposition="end"
                            variant="outlined"
                            icon={<Symbol icon="search" />}
                        >
                            Search
                        </Button>
                    </Row>
                </Card>
            </Container>
            <ButtonLoading />
        </>
    );
}

function ButtonLoading() {
    return (
        <Container size="md">
            <h3>Loading Variant:</h3>
            <p>
                And this is also different loading models that you can use
                whichever you like.
            </p>
            <p>The loading indicator is visible when the button is disabled.</p>
            <Card style={{ maxWidth: "60rem", padding: "30px" }} align="center">
                <Row align="center">
                    <Button
                        variant="outlined"
                        icon={<Symbol icon="search" />}
                        loadingvariant="dots"
                        loadingposition="center"
                        disabled
                    >
                        Loading
                    </Button>
                    <Spacer />
                    <Button
                        variant="outlined"
                        icon={<Symbol icon="search" />}
                        loadingvariant="scaleOut"
                        loadingposition="center"
                        disabled
                    >
                        Loading
                    </Button>
                    <Spacer />
                    <Button
                        variant="outlined"
                        icon={<Symbol icon="search" />}
                        loadingvariant="spinner"
                        loadingposition="center"
                        disabled
                    >
                        Loading
                    </Button>
                </Row>
            </Card>
            <h2>Links</h2>

            <a
                target="_blank"
                href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/theme"
            >
                Source code in github
            </a>
            <br />
            <a
                target="_blank"
                href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/theme"
            >
                Source code in github
            </a>
        </Container>
    );
}
