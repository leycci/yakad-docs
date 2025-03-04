import {
    AppBar,
    Button,
    Container,
    Spacer,
    Hr,
    SvgIcon,
    Card,
    Row,
    Table,
    Tr,
    Thead,
    Th,
    Tbody,
    Td,
} from "@yakad/ui";
import LogoIcon from "@/app/logoicon";
import Symbol from "@yakad/symbols";

export default function Page() {
    return (
        <Container size="md">
            <h1>AppBar</h1>
            <Hr />
            <p>
                A responsive navigation header positioned on top side of your
                page that includes support for branding, links, navigation,
                collapse menu and more.
            </p>
            <Card>
                <Row>
                    <code>{'import { AppBar } from "@yakad/ui"'}</code>
                    <Spacer />
                    <Button icon={<Symbol icon="content_copy" />}></Button>
                </Row>
                <code>{"<AppBar>AppBar</AppBar>"}</code>
            </Card>
            <h2>Properties</h2>
            <p>Properties that are accepted as attributes:</p>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Property</Th>
                        <Th>Value</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>positionSticky</Td>
                        <Td>True | False</Td>
                    </Tr>
                    <Tr>
                        <Td>default</Td>
                        <Td>False</Td>
                    </Tr>
                </Tbody>
            </Table>
            <p>Also, the AppBar accepts the attributes of a div.</p>
            <h3>PositionSticky</h3>
            <p>
                If you scroll the page, the <b>AppBar</b> remains fixed
            </p>
            <AppBar sticky>
                <h1>AppBar</h1>
            </AppBar>
            <h2>Examples</h2>
            <h3>Example 1</h3>
            <AppBar>
                <Button icon={<Symbol icon="menu" />}></Button>
                <h1>AppBar</h1>
            </AppBar>
            <h3>Example 2</h3>
            <AppBar>
                <SvgIcon size={4}>
                    <LogoIcon />
                </SvgIcon>
                <h1>AppBar</h1>
                <Button>Github</Button>
                <Button>About</Button>
                <Spacer />
                <Button variant="outlined" icon={<Symbol icon="login" />}>
                    Login
                </Button>
            </AppBar>
            <p>
                As you can see, you can add buttons, menus, texts and other
                things on the Appbar.In addition, with Appbar, you can make
                attractive headers that are not only beautiful and simple, but
                also one of the best choices for your header.
            </p>
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
