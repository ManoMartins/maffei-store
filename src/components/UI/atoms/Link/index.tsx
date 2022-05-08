import { Button, ButtonProps } from "@mui/material"
import NextLink, { LinkProps } from 'next/link';

interface ILinkProps extends LinkProps {
  href: string
  label: string
  buttonProps?: ButtonProps
}

export const Link = ({ href, label, buttonProps, ...rest }: ILinkProps) => {
  return (
    <NextLink href={href} passHref {...rest}>
      <Button 
        sx={{
          textTransform: "capitalize",
        }}
        {...buttonProps}
      >
        {label}
      </Button>
    </NextLink>
  )
}